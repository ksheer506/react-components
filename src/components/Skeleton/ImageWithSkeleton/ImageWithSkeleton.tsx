import { memo } from "react";
import styled, { css } from "styled-components";
import { Rectangle } from "../Skeleton";
import { useImageEventHandler } from "./useImageEventHandler";

interface ImageWithSkeletonProps {
  image: string | undefined;
  fallbackImage: string;
  width: string;
  height: string;
}

export const ImageWithSkeleton = memo(
  ({ image, fallbackImage, width, height }: ImageWithSkeletonProps) => {
    const { isLoading, onLoad, onError } = useImageEventHandler(fallbackImage);

    return (
      <Box width={width} height={height}>
        {isLoading && (
          <Rectangle width="100%" height="100%" bgColor="#F2F3F7" />
        )}
        <Image
          src={image || fallbackImage}
          isLoading={isLoading}
          onLoad={onLoad}
          onError={onError}
        />
      </Box>
    );
  }
);

const Box = styled.div<Pick<ImageWithSkeletonProps, "width" | "height">>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: 12px;
  overflow: hidden;
`;

const Image = styled.img<{ isLoading: boolean }>`
  width: 100%;
  height: 100%;
  object-fit: cover;

  ${({ isLoading }) =>
    isLoading &&
    css`
      display: none;
    `}
`;
