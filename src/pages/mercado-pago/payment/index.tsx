import { initMercadoPago, Payment, StatusScreen } from '@mercadopago/sdk-react'
import { useRouter } from 'next/router';
import { useEffect, useState } from "react";

initMercadoPago("TEST-2d75059a-7179-42b3-9ef5-0737aeceb1b0", {
    locale: "pt-BR",
});

const PaymentMercadoPago = () => {
    const [paymentId, setPaymentId] = useState("");
    const router = useRouter();
    const [status, setStatus] = useState(false);

    useEffect(() => {
        if (paymentId && status) {
            var interval = setInterval(async () => {
                const res = await fetch(`http://localhost:3001/v1/process_payment/status/${paymentId}`,
                    {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                        },
                    });

                const data = await res.json();
                if (data.status === "approved") {
                    router.push('/status')
                    // setStatus(false);
                }
            }, 10000);
        }
        () => {
            clearInterval(interval)
        }
    }, [status, paymentId])

    const initialization: any = {
        amount: 0.01,
        payer: {
            email: 'thaalesheenrique@gmail.com'
        },
        paymentId: paymentId,
    };
    const customization: any = {
        paymentMethods: {
            bankTransfer: "all",
        },
    };

    const onSubmit = async ({ formData }: any) => {
        const res = await fetch(`http://localhost:3001/v1/process_payment`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

        const data = await res.json();
        setPaymentId(data.id);
        setStatus(true);
    };
    const onError = async (error: any) => {
        console.log(error);
    };
    const onReady = async () => {
    };

    return (
        <>
            {!paymentId ? (
                <Payment
                    initialization={initialization}
                    customization={customization}
                    onSubmit={onSubmit}
                    onReady={onReady}
                    onError={onError}
                />
            ) : (
                <StatusScreen
                    initialization={initialization}
                    onReady={onReady}
                    onError={onError}
                />
            )}

        </>
    );
};
export default PaymentMercadoPago;
