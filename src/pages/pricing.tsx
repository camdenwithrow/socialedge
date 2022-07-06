import { NextPage } from "next";
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

interface PriceNum {
  mon: number;
  ann: number;
}

interface Tier {
  id: number;
  name: string;
  bestFor: string;
  priceNum?: PriceNum;
  priceString?: string;
  actionText: string;
  featuresText: string;
  features: Array<string>;
}

const tiers: Array<Tier> = [
  {
    id: 0,
    name: "Hobbyist",
    bestFor: "The investor on-the-side",
    priceString: "Free",
    actionText: "Get Started",
    featuresText: "Hobbyist includes:",
    features: ["Access to Basic Data"],
  },
  {
    id: 1,
    name: "Investor",
    bestFor: "The serious retail investor",
    priceNum: { mon: 24.99, ann: 19.99 },
    actionText: "Try it free",
    featuresText: "Everything in Hobbyist, plus:",
    features: [],
  },
  {
    id: 2,
    name: "Angel",
    bestFor: "The pure investor",
    priceNum: { mon: 99.99, ann: 79.99 },
    actionText: "Try it free",
    featuresText: "Everything in Investor, plus:",
    features: [],
  },
  {
    id: 3,
    name: "Enterprise",
    bestFor: "The large teams",
    priceString: "Custom",
    actionText: "Contact us",
    featuresText: "Everything in Angel, plus:",
    features: [
      "SAML SSO",
      "User provisioning",
      "Advanced security & controls",
      "Custom contract",
    ],
  },
];

const Pricing: NextPage = () => {
  const [checked, setChecked] = useState(false);

  //   const savingAmount = (id: any) => {
  //     const mon = tiers[id]?.priceNum?.mon;
  //     const ann = tiers[id]?.priceNum?.ann;
  //     const annDiff = 12 * (mon - ann);
  //     console.log(annDiff)
  //     return <>annDiff</>;
  //   };

  return (
    <>
      <Navbar />
      <div className="w-full text-center">
        <h1 className="text-3xl mb-5 ">Ready to get started?</h1>
        <p className="text-gray-400 mb-5">
          Find a plan that works best for you:
        </p>
        <div>
          <div className="mx-auto w-48 flex justify-end mb-1">
            <p className="text-xs font-bold bg-green-200 w-16 p-1 ">15% OFF</p>
          </div>
          <div className="w-64 mx-auto flex justify-center mb-6">
            <span
              className={`${
                checked ? "text-gray-400" : "text-gray-900"
              } mr-3 text-sm font-medium dark:text-gray-300`}
            >
              Monthly
            </span>
            <label
              htmlFor="default-toggle"
              className="inline-flex relative items-center cursor-pointer"
            >
              <input
                type="checkbox"
                checked={checked}
                onChange={(e) => setChecked(!checked)}
                value=""
                id="default-toggle"
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
            </label>
            <span
              className={`${
                checked ? "text-gray-900" : "text-gray-400"
              } ml-3 text-sm font-medium dark:text-gray-300`}
            >
              Yearly
            </span>
          </div>
        </div>
        <div className="flex justify-center text-left flex-col items-center lg:items-start lg:flex-row ">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className="border rounded-lg p-4 m-3 shadow w-4/6 sm:w-96 md:w-[32rem] lg:w-64 font-bold"
            >
              <div>{tier.name}</div>
              <div className="font-normal text-sm lg:h-10">{tier.bestFor}</div>
              <div className="my-4 text-4xl lg:text-4xl font-light">
                {tier.priceNum
                  ? checked
                    ? `$${tier.priceNum.ann}`
                    : `$${tier.priceNum.mon}`
                  : tier.priceString}
                {tier.priceNum && <span className="text-xs"> / month</span>}
              </div>
              {/* <div>{tier.priceNum && checked && <>{() => savingAmount(tier.id)}</>}</div> */}
              <button className="p-2 w-full text-green-600 border-2 border-green-600 rounded-lg hover:bg-green-100 active:bg-green-200">
                {tier.actionText}
              </button>
              <div className="mt-3">
                <p className="text-xs mb-1">{tier.featuresText}</p>
                {tier.features.map((feature) => (
                  <p key={feature} className="font-normal text-sm p-2">
                    {feature}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Pricing;
