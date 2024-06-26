import CardProduct from "@/components/CardProduct";
import CustomContainer from "@/components/CustomContainer";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Image from "next/image";
import React from "react";

const Category = ({ params }) => {
  return (
    <section>
      <CustomContainer className="bg-lightblue">
        <div className="w-full flex text-black">
          <div className="w-[70%] space-y-5 justify-start rounded-lg">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/courses">Courses</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                {params.category}
              </BreadcrumbList>
            </Breadcrumb>
            <h6 className="text-3xl font-bold">{params.category}</h6>
          </div>
          <div className="w-[30%] p-4 flex-col flex rounded-lg items-center">
            <Image
              src="/pexels.jpg"
              alt="home banner"
              width={286 * 1.5}
              height={190 * 1.5}
              className="rounded-lg "
            />
          </div>
        </div>
      </CustomContainer>
      <CustomContainer className="mt-16 bg-white">
        <div className="flex flex-col items-center">
          <h1 className=" text-black text-bold text-2xl">Filters</h1>
          <div className="grid grid-cols-4 gap-10 pt-10">
            <CardProduct
              image="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Product_photography.jpg/1024px-Product_photography.jpg"
              duration="3"
              type="E-Learning"
              title="Day la Kasasdsad"
            />
            <CardProduct
              image="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Product_photography.jpg/1024px-Product_photography.jpg"
              duration="3"
              type="E-Learning"
              title="Day la Kasasdsad"
            />
            <CardProduct
              image="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Product_photography.jpg/1024px-Product_photography.jpg"
              duration="3"
              type="E-Learning"
              title="Day la Kasasdsad"
            />
            <CardProduct
              image="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Product_photography.jpg/1024px-Product_photography.jpg"
              duration="3"
              type="E-Learning"
              title="Day la Kasasdsad"
            />
            <CardProduct
              image="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Product_photography.jpg/1024px-Product_photography.jpg"
              duration="3"
              type="E-Learning"
              title="Day la Kasasdsad"
            />
            <CardProduct
              image="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Product_photography.jpg/1024px-Product_photography.jpg"
              duration="3"
              type="E-Learning"
              title="Day la Kasasdsad"
            />
            <CardProduct
              image="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Product_photography.jpg/1024px-Product_photography.jpg"
              duration="3"
              type="E-Learning"
              title="Day la Kasasdsad"
            />
            <CardProduct
              image="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Product_photography.jpg/1024px-Product_photography.jpg"
              duration="3"
              type="E-Learning"
              title="Day la Kasasdsad"
            />
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default Category;
