import InputForm from "../components/InputForm";
import MonthSelect from "../components/MonthSelect";
import SpendingItem from "../components/SpendingItem";
import NavBar from "../components/NavBar";

const HomePage = () => {
  return (
    <>
      <div className="container">
        <NavBar title="가계부" />
        <InputForm />
        <MonthSelect />
        <SpendingItem />
      </div>
    </>
  );
};

export default HomePage;
