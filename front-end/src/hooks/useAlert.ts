import Swal from 'sweetalert2'

export default function useAlert() {
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
    });
    const showAlertSuccess = (title?: string) => {
        Toast.fire({
            icon: "success",
            title: title ?? "บันทึกข้อมูลสำเร็จ"
        });
    }
    return { showAlertSuccess }

}
