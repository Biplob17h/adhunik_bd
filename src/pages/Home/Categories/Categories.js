import { useParams } from "react-router-dom";
import { serviceData } from "../../../utils/common";
import CategoryCard from "../../../components/CategoryCard/CategoryCard";

const Categories = () => {
  const { id } = useParams();
  const filteredData = serviceData.filter((item) => item.id === id);
  return (
    <div className="h-full">
      <h1 className="text-[2rem] font-semibold py-10 text-center text-orange-500">
        {filteredData[0].name}
      </h1>
      <div className="xl:max-w-[1200px] mx-auto flex flex-col">
        {filteredData.map((data, i) => {
          return (
            <div className="w-full grid md:grid-cols-4 grid-cols-2 gap-y-5">
              {data.categories.map((data, i) => {
                return <CategoryCard key={i} data={data} />;
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
