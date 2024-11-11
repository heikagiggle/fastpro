import Notes from './notes/Notes';
import Invoice from './invoice/Invoice';

const PendingDetails = () => {
  return (
    <div className="flex gap-4 h-screen">
      <Invoice />
      <Notes />
    </div>
  );
};

export default PendingDetails;
