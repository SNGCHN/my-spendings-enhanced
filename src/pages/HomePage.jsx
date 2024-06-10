import InputForm from "../components/InputForm";
import MonthSelect from "../components/MonthSelect";
import SpendingItem from "../components/SpendingItem";

const HomePage = () => {
  return (
    <div className="container">
      <InputForm />
      <MonthSelect />
      <SpendingItem />
    </div>
  );
};

export default HomePage;
