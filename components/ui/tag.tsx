import { FC } from "react";

interface TagProps {
  label: string;
  onClose: () => void;
}

export const Tag: FC<TagProps> = ({ label, onClose }) => {
  return (
    <div className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
      <span>{label}</span>
      <button
        onClick={onClose}
        className="ml-1 focus:outline-none hover:text-red-700"
      >
        &times;
      </button>
    </div>
  );
};
