import React from "react";

type Props = {
  title: string;
};

export default function SectionTitle({ title }: Props) {
  return (
    <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-400 text-3xl md:text-4xl text-center justify-center ml-[25px] md:ml-0">
      {title}
    </h3>
  );
}
