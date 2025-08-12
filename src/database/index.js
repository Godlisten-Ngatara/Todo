import categories from "./Tasks/categories.json";
import priorities from "./Tasks/priorities.json";
import status from "./Tasks/status.json";

export const getCategories = (e) => {
  return categories.categories;
};
export const getPriorities = () => {
  return priorities.priorities;
};
export const getStatus = () => {
  return status.status;
};

export default {
  categories: getCategories(),
  priorities: getPriorities(),
  status: getStatus(),
};
