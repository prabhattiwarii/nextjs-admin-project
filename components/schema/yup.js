import * as Yup from "yup";

export const formSchema = Yup.object({
    f_name: Yup.string().min(2).max(25).required("Please enter your name"),
    phone: Yup.string().min(10).max(10).required("Please enter a valid number"),
    password: Yup.string().min(8).max(20).required("Please enter a password"),
    references: Yup.string().required("Please select references"),
    limit: Yup.string().required("Please enter a limit"),
    status: Yup.string().required("Please select a status"),
    ref_comm_joddi: Yup.string().required("Please enter Ref. Commission Joddi"),
    ref_comm_harf: Yup.string().required("Please enter Ref. Commission Harf"),
    ref_patti: Yup.string().required("Please enter Ref. Patti"),
    user_comm_joddi: Yup.string().required("Please enter User Commission Joddi"),
    user_comm_harf: Yup.string().required("Please enter User Commission Harf"),
    user_patti: Yup.string().required("Please enter User Patti"),
  });
  