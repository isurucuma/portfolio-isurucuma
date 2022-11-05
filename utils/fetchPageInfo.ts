import { PageInfo } from "../typings";

export const fetchPageInfo = async function () {
  console.log(`url is: ${process.env.NEXT_PUBLIC_BASE_URL}api/getPageInfo`);
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/getPageInfo`);
  const data = await res.json();

  const pageInfo: PageInfo = data;
  return pageInfo;
};
