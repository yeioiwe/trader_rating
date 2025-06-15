import { Col } from "@/shared/ui/boxes"
import { Link, Typography } from "@mui/material"
import Image from "next/image"

export default function NotFoundPage() {
    return <Col width={'100%'} mt={6} alignItems={"center"} gap={4}>
        <Image width={96} height={96} src={'/icons/not_found_icon.png'} alt="logo" />

        <Typography fontSize={32} fontWeight={700}>Страница не найдена!</Typography>

        <Link href="/">
            <Typography color="#5694cb" fontSize={21}>Вернутся на главную</Typography>
        </Link>
    </Col>
}