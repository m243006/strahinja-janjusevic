
import { Skeleton } from "@/components/ui/skeleton";

const LoadingSkeleton = () => {
  return (
    <div className="min-h-screen relative pt-5 pb-10">
      <div className="container mx-auto px-4 relative z-10">
        {/* Current Interests Skeleton */}
        <div className="mb-10 md:mb-20">
          <Skeleton className="h-8 w-80 mx-auto mb-4" />
          <Skeleton className="h-16 w-full rounded-lg" />
        </div>

        {/* Journey Title Skeleton */}
        <Skeleton className="h-12 w-60 mx-auto mb-8" />

        {/* Timeline Cards Skeleton */}
        <div className="relative h-[1500px]">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="absolute w-72"
              style={{
                left: `${15 + (index % 2) * 60}%`,
                top: `${10 + index * 20}%`,
              }}
            >
              <div className="bg-background/80 backdrop-blur border rounded-lg p-4">
                <Skeleton className="h-32 w-full mb-4 rounded" />
                <Skeleton className="h-6 w-3/4 mb-2" />
                <Skeleton className="h-4 w-full mb-1" />
                <Skeleton className="h-4 w-2/3" />
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Cards Skeleton */}
        <div className="md:hidden grid grid-cols-1 gap-4 mb-8">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="bg-background/80 backdrop-blur border rounded-lg p-4">
              <Skeleton className="h-32 w-full mb-4 rounded" />
              <Skeleton className="h-6 w-3/4 mb-2" />
              <Skeleton className="h-4 w-full mb-1" />
              <Skeleton className="h-4 w-2/3" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingSkeleton;
