import { Form } from "../form";
import { RightSideProps } from "./types";

export const RightSide = (props: RightSideProps) => {
  const { selectedCalculation } = props;

  return (
    <div className="bg-fourth w-1/2 h-screen flex flex-col items-center justify-center ">
      <Form selectedCalculation={selectedCalculation} />
    </div>
  );
};
