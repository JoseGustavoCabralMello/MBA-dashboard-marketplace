import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Helmet } from "react-helmet-async";
import { OrderTableFilters } from "./order-table-filters";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getProducts } from "@/api/get-products";
import { ProductTableRow } from "./product-table-row";
import { ProductTableFilters } from "./product-filters";
import { ProductCard } from "../dashboard/product-card";

export function Products() {
  const [searchParams, setSearchParams] = useSearchParams()

  const id = searchParams.get('id')
  const title = searchParams.get('title')
  const description = searchParams.get('description')
  const priceInCents = searchParams.get('priceInCents')
  const status = searchParams.get('status')

  const { data: result } = useQuery({
    queryKey: ['products', id, title, description, priceInCents, status],
    queryFn: () =>
      getProducts({
        id,
        title,
        description,
        priceInCents: priceInCents ? Number(priceInCents) : null,
        status: status === 'all' ? null : status,
      }),
  })

  return (
    <>
      <Helmet title="Products" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Pedidos</h1>
      
        <div className="space-y-2.5">
          <ProductTableFilters />

          <div>
            {result &&
                  result.products.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={{
                        productId: product.id,
                        title: product.title,
                        description: product.description,
                        priceInCents: product.priceInCents,
                        status: product.status,
                      }}
                    />
                  ))}
            {/* <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[64px]"></TableHead>
                  <TableHead className="w-[140px]">Identificador</TableHead>
                  <TableHead className="w-[180px]">Título</TableHead>
                  <TableHead className="w-[140px]">Descrição</TableHead>
                  <TableHead>Preço</TableHead>
                  <TableHead className="w-[140px]">Status</TableHead>
                  <TableHead className="w-[164px]"></TableHead>
                  <TableHead className="w-[132px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
               
              </TableBody>
            </Table> */}
          </div>
          
        </div>
      </div>
    </>
  )
}