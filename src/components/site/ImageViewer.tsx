import { useEffect } from "react";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

type Props = {
  src: string;
  alt?: string;
  className?: string;
};

export default function ImageViewer({
  src,
  alt = "",
  className = "",
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
        }}
      />
    </a>
  );
}