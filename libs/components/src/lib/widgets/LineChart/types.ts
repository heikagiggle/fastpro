export type Chart = {
    data: { key: string; value: number }[];
    color?: string;
    label: string;
    key: string;
  };
  
  export type Props = {
    className?: string;
    charts: Chart[];
  };
  