import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { CSSProperties, useEffect } from "react";

type Props = {
  src: string;
  alt?: string;
  className?: string;
  style?: CSSProperties;
};

export default function ImageViewer({
  src,
  alt = "",
  className = "",
  style,
}: Props) {
  useEffect(() => {
    Fancybox.bind("[data-fancybox]");

    return () => {
      Fancybox.unbind("[data-fancybox]");
      Fancybox.close();
    };
  }, []);

  return (
    <a
      href={src}
      data-fancybox={alt || src}
      data-caption={alt}
    >
      <img
  src={src}
  alt={alt}
  className={`${className} cursor-zoom-in`}
  loading="lazy"
  style={{
    maxWidth: "100%",
    height: "auto",
    objectFit: "contain",
    ...style,
  }}
/>
    </a>
  );
}