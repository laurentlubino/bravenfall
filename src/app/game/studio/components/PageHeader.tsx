import { FireLink } from '@/components/FireLink';

type PageHeaderProps = {
  title: string;
  create: {
    label: string;
    href: string;
  };
};

export const PageHeader = ({ title, create }: PageHeaderProps) => {
  return (
    <div className="flex flex-row justify-between items-center pb-6 mb-6 border-b border-gray-200/20">
      <h1>{title}</h1>
      <div>
        <FireLink href={create.href} size="sm">
          {create.label}
        </FireLink>
      </div>
    </div>
  );
};
