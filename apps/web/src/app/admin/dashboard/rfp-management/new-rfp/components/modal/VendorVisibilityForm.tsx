'use client';
import React, { ChangeEvent, useState } from 'react';
import { Form } from '@app/components/lib/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, useWatch } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { SelectInput } from '@app/components/lib/form/select-input';
import { SubmitButton } from '@app/components/lib/form/SubmitButton';
import { z } from 'zod';
import { InfoIcon } from '../../../../../components/icons/i';
import { SearchIcon } from '../../../../../components/icons/search-icon';
import { vendors } from './data';

const VisibilitySchema = z.object({
  visibility_status: z.string(),
});

export type VisibilityData = z.infer<typeof VisibilitySchema>;

const VendorVisibilityForm = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [invitedVendors, setInvitedVendors] = useState<string[]>([]);

  const handler = useForm<VisibilityData>({
    resolver: zodResolver(VisibilitySchema),
    mode: 'onChange',
  });

  // Watch the visibility status
  const visibilityStatus = useWatch({
    control: handler.control,
    name: 'visibility_status',
  });

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const query: string = event.target.value;
    setSearchTerm(query);
  };

  const onSubmit = (data: VisibilityData) => {
    console.log(data);
  };

  //   toggle invite
  const toggleInvite = (vendorId: string) => {
    setInvitedVendors(
      (prev) =>
        prev.includes(vendorId)
          ? prev.filter((id) => id !== vendorId) // Uninvite
          : [...prev, vendorId] // Invite
    );
  };

  return (
    <Form {...handler}>
      <form onSubmit={handler.handleSubmit(onSubmit)} className="my-2">
        <SelectInput
          name="visibility_status"
          label="Vendor Visibility"
          placeholder="Select"
          items={[
            { label: 'Public', value: 'public', keywords: ['public'] },
            {
              label: 'Past Vendors',
              value: 'past_vendors',
              keywords: ['past vendors'],
            },
            {
              label: 'Invite only',
              value: 'invite_only',
              keywords: ['invite only'],
            },
          ]}
        />

        {visibilityStatus === 'public' && (
          <div className="flex gap-x-2 items-center py-2">
            <InfoIcon />
            <p className="text-xs">
              The RFP is visible to all registered vendors on the platform
            </p>
          </div>
        )}

        {visibilityStatus === 'invite_only' && (
          <>
            <div className="flex gap-x-2 items-center py-2">
              <InfoIcon />
              <p className="text-xs">
                The RFP is visible to only invited users
              </p>
            </div>

            <div className="flex items-center gap-x-4 text-[15px] full my-5">
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center pl-2">
                  <SearchIcon />
                </div>
                <input
                  type="search"
                  id="search"
                  className="containerBorder block w-[28rem] pl-10 px-2 py-2 text-sm outline-none"
                  placeholder="Search for vendors"
                  value={searchTerm}
                  onChange={handleSearch}
                />
              </div>
            </div>

            {searchTerm && (
              <div className="flex flex-col my-8 rounded-lg shadow-md max-w-full overflow-hidden p-3 overflow-y-auto">
                {vendors
                  .filter((vendor) =>
                    vendor.name.toLowerCase().includes(searchTerm.toLowerCase())
                  )
                  .map((vendor) => (
                    <div key={vendor.id} className="w-full">
                      <div className="flex flex-col gap-y-1.5 my-2 border-b border-[#E5E5E5] pb-2">
                        <h1 className="font-medium text-sm cursor-pointer">
                          {vendor.name}
                        </h1>
                        <div className="flex justify-between items-center">
                          <p className="py-2 text-xs flex-1">
                            {vendor.description}
                          </p>
                          <button
                            className={`flex gap-x-2 items-center rounded-md px-3 py-1 whitespace-nowrap ${
                              invitedVendors.includes(vendor.id)
                                ? 'bg-transparent text-[#7209B7] border border-[#7209B7]'
                                : 'bg-[#7209B7] text-white'
                            }`}
                            onClick={() => toggleInvite(vendor.id)}
                          >
                            {invitedVendors.includes(vendor.id)
                              ? 'Un-invite'
                              : 'Invite'}
                          </button>
                        </div>
                        <p className="py-2">{vendor.rating}</p>
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </>
        )}

        <div className="flex gap-x-3 my-3">
          <button
            className="containerBorder border-[#1018280D] font-semibold px-3 py-2 text-sm rounded-lg cursor-pointer w-full"
            onClick={() => router.back()}
          >
            Cancel
          </button>
          <SubmitButton className="px-6 py-2 text-sm w-full">
            Save as Draft
          </SubmitButton>
          <SubmitButton className="px-6 py-2 text-sm w-full" onClick={()=>router.push('/admin/dashboard/rfp-management/new-rfp/review')} >
            Review
          </SubmitButton>

        </div>
      </form>
    </Form>
  );
};

export default VendorVisibilityForm;
