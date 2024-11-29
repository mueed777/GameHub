import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <div>
      <Card width="400px" borderRadius={10} overflow="hidden">
        <Skeleton height="200px"></Skeleton>
        <CardBody>
          <SkeletonText></SkeletonText>
        </CardBody>
      </Card>
    </div>
  );
};

export default GameCardSkeleton;
