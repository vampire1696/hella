import CustomContainer from "@/components/CustomContainer";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import Image from "next/image";
import React from "react";

const Product = ({ params }) => {
  return (
    <section>
      <CustomContainer className="bg-black relative min-h-[280px]">
        <div className="w-full flex text-white">
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
                {params.product}
              </BreadcrumbList>
            </Breadcrumb>
            <h6 className="text-3xl font-bold">{params.product}</h6>
            <div className="flex">
              <div className="flex gap-x-2 pr-4">
                <Icon
                  color="blue"
                  height={25}
                  width={25}
                  icon="prime:chart-bar"
                />
                <span>Basic</span>
              </div>
              <div className="flex gap-x-2 pr-4">
                <Icon
                  color="blue"
                  height={20}
                  width={20}
                  icon="simple-line-icons:clock"
                />
                <span>3 hour(s)</span>
              </div>
              <div className="flex gap-x-2 pr-4">
                <Icon
                  color="blue"
                  height={25}
                  width={25}
                  icon="entypo:price-tag"
                />
                <span>0 $</span>
              </div>
              <div className="flex gap-x-2 pr-4">
                <Icon
                  color="blue"
                  height={25}
                  width={25}
                  icon="bi:person-video3"
                />
                <span>E-Learning</span>
              </div>
              <div className="flex gap-x-2 pr-4">
                <Icon
                  color="blue"
                  height={25}
                  width={25}
                  icon="f7:house-fill"
                />
                <span>External-Others</span>
              </div>
            </div>
          </div>
          <div className="w-[30%] p-4 flex-col flex rounded-lg items-center">
            <Button variant="customblue" className="absolute -bottom-4">
              Start Course
            </Button>
          </div>
        </div>
      </CustomContainer>
      <CustomContainer className="bg-white mt-16 ">Tabs</CustomContainer>
    </section>
  );
};

export default Product;
