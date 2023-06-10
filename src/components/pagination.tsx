import * as React from 'react';
import { Pagination as MuiPagination } from '@mui/material';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowLeftIcon from '../../public/arrow-left.svg';
import ArrowRightIcon from '../../public/arrow-right.svg';

interface IPaginationProps {
  // eslint-disable-next-line no-unused-vars
  setPage: (page: number) => void;
  pageCount: number;
  page: number;
}

export default function Pagination({ setPage, pageCount, page }: IPaginationProps) {
  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  return (
    <Stack spacing={2}>
      <MuiPagination
        count={pageCount}
        shape="rounded"
        color="primary"
        page={page}
        boundaryCount={1}
        siblingCount={0}
        onChange={handleChange}
        renderItem={(item) => (
          <PaginationItem
            components={{ previous: ArrowLeftIcon, next: ArrowRightIcon }}
            {...item}
          />
        )}
      />
    </Stack>
  );
}
