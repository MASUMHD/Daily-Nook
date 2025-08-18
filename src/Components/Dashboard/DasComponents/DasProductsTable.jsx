import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useState } from "react";
import DasUpdateAndDeleteProduct from "./DasUpdateAndDeleteProduct";

const DasProductsTable = ({ products, refetch }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const columns = [
    {
      header: "No",
      cell: (info) => info.row.index + 1,
    },
    {
      header: "Image",
      cell: ({ row }) => {
        const product = row.original;
        const images =
          product.images ||
          [
            product["first-image"],
            product["second-image"],
            product["third-image"],
          ].filter(Boolean);

        return (
          <div className="flex gap-1">
            {images.slice(0, 2).map((img, i) => (
              <img
                key={i}
                src={img}
                alt="product"
                className="w-12 h-12 rounded object-cover border"
              />
            ))}
          </div>
        );
      },
    },
    {
      header: "Product Name",
      cell: (info) => info.row.original.name || info.row.original.productName,
    },
    {
      header: "Category",
      accessorKey: "category",
    },
    {
      header: "Price",
      accessorKey: "price",
      cell: ({ getValue }) => `$${getValue()}`,
    },
    {
      header: "Discount",
      accessorKey: "discount",
      cell: ({ getValue }) => (getValue() ? `${getValue()}%` : "0%"),
    },
    {
      header: "Rating",
      accessorKey: "rating",
      cell: ({ getValue }) => (
        <span className="px-2 py-1 rounded bg-yellow-100 text-yellow-700 text-sm">
          ⭐ {getValue()}
        </span>
      ),
    },
    {
      header: "Actions",
      cell: ({ row }) => (
        <div className="flex gap-2">
          <button
            className="p-2 rounded bg-blue-100 text-blue-600 hover:bg-blue-200"
            onClick={() => setSelectedProduct(row.original)}
          >
            <FaEdit />
          </button>
          <button
            className="p-2 rounded bg-red-100 text-red-600 hover:bg-red-200"
            onClick={() => setSelectedProduct(row.original)} 
          >
            <FaTrash />
          </button>
        </div>
      ),
    },
  ];

  const table = useReactTable({
    data: products,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="overflow-x-auto">
      <h2 className="text-2xl lg:text-3xl font-bold mb-4 mt-2">
        Products{" "}
        <span className="text-gray-500 font-bold border-2 text-2xl p-1 rounded-lg border-[#634C9F]">
          {products.length}
        </span>
      </h2>
      <table className="min-w-full border border-gray-300 rounded-lg shadow-md">
        <thead className="bg-gray-100 text-gray-700">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="border-b p-3 text-left font-medium"
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="hover:bg-[#eae9ed] transition">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="border-b p-3">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {selectedProduct && (
        <DasUpdateAndDeleteProduct
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onUpdated={refetch}
        />
      )}
    </div>
  );
};

export default DasProductsTable;

