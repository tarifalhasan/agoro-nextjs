"use client";

import { FC, useState } from "react";
import * as z from "zod";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Tag } from "../ui/tag";

// Validation schema
const FormSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  music: z.string({
    required_error: "Please upload a valid music",
  }),
  tags: z.string().array(),
});

interface Step2Props {
  formData: {
    title: string;
    music: string;
    tags: string[];
  };
  setFormData: React.Dispatch<
    React.SetStateAction<{
      title: string;
      music: string;
      tags: string[];
    }>
  >;
  onNext: () => void;
  onPrevious: () => void;
}
const UplodMusic: FC<Step2Props> = ({ formData, setFormData, onNext }) => {
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleAddTag = (tag: string) => {
    if (!formData.tags.includes(tag) && formData.tags.length < 10) {
      setFormData({
        ...formData,
        tags: [...formData.tags, tag],
      });
      setErrorMessage("");
    } else if (formData.tags.includes(tag)) {
      setErrorMessage("Tag already exists");
    } else {
      setErrorMessage("Maximum tags reached");
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    const updatedTags = formData.tags.filter((tag) => tag !== tagToRemove);
    setFormData({
      ...formData,
      tags: updatedTags,
    });
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleMusicUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      console.log("Selected File:", file);
      setFormData({
        ...formData,
        music: file.name,
      });
    }
  };

  const onSubmit = async () => {
    const validationResult = FormSchema.safeParse(formData);

    if (!validationResult.success) {
      setErrorMessage(validationResult.error.message);
      return;
    }
    onNext();
  };

  return (
    <div className="py-6">
      <div>
        <h2 className="py-4 border-b text-heading-3">UPLOAD MUSIC</h2>
      </div>
      <div className="space-y-8 pt-6">
        <div className=" space-y-2">
          <Label>Title</Label>
          <Input
            placeholder="Enter title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
          />
          {errorMessage && (
            <p className="text-sm text-red-600">{errorMessage}</p>
          )}
        </div>
        <div className=" space-y-2">
          <Label>Upload Music</Label>
          <label className="w-full border-neutral-40 h-[150px] border flex flex-col items-center px-4 py-6  text-blue shadow-lg tracking-wide uppercase  bg-neutral-50 cursor-pointer hover:bg-blue hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={45}
              height={45}
              viewBox="0 0 45 45"
              fill="none"
            >
              <path
                d="M7.83335 35.3333H37.1667V22.5H40.8334V37.1666C40.8334 37.6529 40.6402 38.1192 40.2964 38.463C39.9526 38.8068 39.4862 39 39 39H6.00002C5.51379 39 5.04747 38.8068 4.70366 38.463C4.35984 38.1192 4.16669 37.6529 4.16669 37.1666V22.5H7.83335V35.3333ZM26.1667 17V28H18.8334V17H9.66669L22.5 4.16663L35.3334 17H26.1667Z"
                fill="white"
              />
            </svg>

            <span className="mt-4 font-normal text-heading-3 leading-normal">
              Upload Audio File
            </span>
            <input
              type="file"
              name="music"
              onChange={handleMusicUpload}
              className="hidden"
              accept="audio/*"
            />
          </label>
        </div>
        <div className="space-y-2">
          <Label>Tags</Label>
          <Input
            placeholder="Describe the vibe..."
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                event.preventDefault();
                handleAddTag(event.currentTarget.value.trim());
                event.currentTarget.value = "";
              }
            }}
          />
          {errorMessage && (
            <p className="text-sm text-red-600">{errorMessage}</p>
          )}
          <div>
            {formData.tags.map((tag, index) => (
              <Tag
                key={index}
                label={tag}
                onClose={() => handleRemoveTag(tag)}
              />
            ))}
          </div>
        </div>
        <Button className=" w-full uppercase" type="button" onClick={onSubmit}>
          next
        </Button>
      </div>
    </div>
  );
};

export default UplodMusic;
