import { PrismaClient } from "@prisma/client"


export default function Home() {
  return (
    <h1>test</h1>
  )
}


export const getServerSideProps = async() => {

  const prisma = new PrismaClient();

  const categorias = await prisma.categoria.findMany();

  console.log(categorias)

}