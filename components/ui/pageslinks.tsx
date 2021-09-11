import React from "react";
import Link from "next/link";

export default function PagesLink(props) {
  return (
    <div className="pages">
      {props.tabPages.map((page) => (
        <Link key={page} href={"?p=" + page}>
          <a className={props.pageNbr == page ? "active-page" : ""} key={page}>
            {page} 
          </a>
        </Link>
      ))}
    </div>
  );
}
