import { NextPage } from "next";
import Head from "next/head";
import Router, { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { stagger } from "../../animations";
import Button from "../../components/Button";
import Cursor from "../../components/Cursor";
import Header from "../../components/Header";
import data from "../../data/portfolio.json";
import { ISOToDate, useIsomorphicLayoutEffect } from "../../utils";
import { getAllPosts } from "../../utils/api";

const contact = () => {
  const text = useRef();

  return (
    <>
      {data.showCursor && <Cursor />}
      <Head>
        <title>Contact Us.</title>
      </Head>
      <div
        className={`container mx-auto mb-10 ${
          data.showCursor && "cursor-none"
        }`}
      >
        <Header isBlog={true}></Header>
        <div className="mt-10">
          <h1
            ref={text}
            className="mx-auto mob:p-2 text-bold text-6xl laptop:text-8xl w-full"
          >
            Contact Us.
          </h1>
          <center>
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSeT3mUwj6CiOPnkrTvsQC_Lx37WCqkkX6UMHo5eimauxZ4HMA/viewform?embedded=true"
              width="640"
              height="890"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
            >
              Loading…
            </iframe>
          </center>
          <div className="mt-10 grid grid-cols-1 mob:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 justify-between gap-10"></div>
        </div>
      </div>
    </>
  );
};

export default contact;
