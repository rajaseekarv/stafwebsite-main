import { useRef, useState } from "react";
import { Play, Pause, X } from "lucide-react";

type HeroVideoCarouselProps = {
  videos: string[];
  onClose: () => void;
};

export default function HeroVideoCarousel({
  videos,
  onClose,
}: HeroVideoCarouselProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [activeVideo, setActiveVideo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [fade, setFade] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const nextVideo = () => {
    setIsLoading(true);

    setTimeout(() => {
        setActiveVideo((prev) => (prev + 1) % videos.length);
    }, 100);
    };

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="absolute inset-0 overflow-hidden">

      <video
        ref={videoRef}
        key={activeVideo}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            fade ? "opacity-0" : "opacity-100"
        }`}
        autoPlay
        muted
        playsInline
        onEnded={nextVideo}
        onCanPlay={() => setIsLoading(false)}
        >
        <source src={videos[activeVideo]} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {isLoading && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/40 backdrop-blur-sm">
            <div className="flex items-center justify-center">
                <div className="h-10 w-10 animate-spin rounded-full border-4 border-white/20 border-t-white" />
            </div>
        </div>
        )}

      {/* Controls */}
      <div className="absolute bottom-8 right-8 z-30 flex items-center gap-3">

            {/* Pause / Resume */}
            <button
                onClick={togglePlay}
                className="flex items-center gap-2 rounded-full
                        bg-white/15 backdrop-blur-md
                        border border-white/20
                        px-5 py-3
                        text-white
                        transition-all duration-300
                        hover:bg-white/25"
            >
                {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                <span>{isPlaying ? "Pause" : "Resume"}</span>
            </button>

            {/* Close */}
            <button
                onClick={onClose}
                className="flex items-center gap-2 rounded-full
                        bg-white/15 backdrop-blur-md
                        border border-white/20
                        px-5 py-3
                        text-white
                        transition-all duration-300
                        hover:bg-red-500/80"
            >
                <X size={20} />
                <span>Close</span>
            </button>

            </div>

    </div>
  );
}