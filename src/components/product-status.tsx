export type ProductStatus =
  'available' | 'sold' | 'cancelled'

interface ProductStatusProps {
  status: ProductStatus
}

const productStatusMap: Record<ProductStatus, string> = {
  available: 'Disponível',
  sold: 'Vendido',
  cancelled: 'Cancelado'
}

export function ProductStatus({ status }: ProductStatusProps) {
  return (
    <div className="flex items-center gap-2">
      {status === 'sold' && (
        <span className="h-2 w-2 rounded-full bg-slate-400" />
      )}

      {status === 'cancelled' && (
        <span className="h-2 w-2 rounded-full bg-rose-500" />
      )}

      {status === 'available' && (
        <span className="h-2 w-2 rounded-full bg-emerald-500" />
      )}

      <span className="font-medium text-muted-foreground">
        {productStatusMap[status]}
      </span>
    </div>
  )
}