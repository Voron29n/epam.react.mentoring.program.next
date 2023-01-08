import { useCallback, useEffect, useRef } from 'react';
import { NextRouter, useRouter } from 'next/router';
import { IDropDownItem } from 'components';

export const useActiveSearchParams = (
  changeCallback: () => void,
  searchName: string,
  activeList: Array<IDropDownItem>,
  activeValue: IDropDownItem,
  setActiveValue: (activeSortType: IDropDownItem, router: NextRouter) => void
) => {
  const router = useRouter();
  const refActive = useRef<boolean>(false);

  useEffect(() => {
    const searchParam = router.query[searchName];
    const searchValue = activeList.find(({ value }) => value === searchParam);
    setActiveValue(searchValue ? searchValue : activeList[0], router);
  }, []);

  useEffect(() => {
    if (!refActive.current) {
      refActive.current = true;
      return;
    }

    changeCallback();
  }, [activeValue]);

  const handleSelectedActive: (selectedValue: IDropDownItem) => void =
    useCallback(
      (selectedValue: IDropDownItem) => {
        setActiveValue(selectedValue, router);
      },
      [setActiveValue]
    );

  return { handleSelectedActive };
};
