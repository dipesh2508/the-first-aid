import { Skeleton } from "../ui/skeleton";

const ConsentFormSkeleton = () => {
    return (
      <div className="space-y-8">
        <div className="bg-gray-50 p-6 rounded-lg">
          <Skeleton className="h-8 w-48 mb-4" />
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-3">
              <Skeleton className="h-5 w-40" />
              <Skeleton className="h-5 w-24" />
              <Skeleton className="h-5 w-32" />
            </div>
            <div className="space-y-3">
              <Skeleton className="h-5 w-36" />
              <Skeleton className="h-5 w-28" />
              <Skeleton className="h-5 w-44" />
            </div>
          </div>
          <div className="mt-4 space-y-3">
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-full" />
          </div>
        </div>
  
        <div className="space-y-6">
          <div className="space-y-3 px-4">
            <Skeleton className="h-5 w-32" />
            <Skeleton className="h-10 w-full" />
          </div>
  
          <div className="space-y-3 px-4">
            <Skeleton className="h-5 w-32" />
            <Skeleton className="h-10 w-full" />
          </div>
  
          <div className="space-y-3 px-4">
            <Skeleton className="h-5 w-32" />
            <Skeleton className="h-24 w-full" />
          </div>
  
          <Skeleton className="h-10 w-full" />
        </div>
      </div>
    );
  };

export default ConsentFormSkeleton;
