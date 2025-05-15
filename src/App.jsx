import FormDataContextProvider from "./components/FormDataContextProvider";
import AppRoutes from "./routes/AppRoutes";

export default function App() {
  return (
    <FormDataContextProvider>
      <AppRoutes />
    </FormDataContextProvider>
  );
}
