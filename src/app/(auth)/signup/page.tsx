import RegisterForm from "@/app/features/auth/components/register-form";
import { requireUnauth } from "@/lib/auth-utils";

const Regsiter = async () => {
  await requireUnauth();

  return (
    <div>
      <RegisterForm />
    </div>
  );
};
export default Regsiter;
