"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Filter, SortAsc, SortDesc } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ProductCard } from "@/components/product-card"
import { ProductFilters } from "@/components/product-filters"
import { products, categories } from "@/lib/products"
import type { Product } from "@/lib/types"

export default function ProductsPage() {
  const searchParams = useSearchParams()
  const categoryParam = searchParams.get("categoria")

  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string | null>(categoryParam)
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | null>(null)
  const [sortBy, setSortBy] = useState<"name" | "price" | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 9

  useEffect(() => {
    let result = [...products]

    // Filter by category
    if (selectedCategory) {
      result = result.filter((product) => 
        Array.isArray(product.category) 
          ? product.category.includes(selectedCategory)
          : product.category === selectedCategory
      )
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (product) => product.name.toLowerCase().includes(query) || product.description.toLowerCase().includes(query),
      )
    }

    // Sort products
    if (sortBy === "name") {
      result.sort((a, b) => {
        if (sortOrder === "asc") {
          return a.name.localeCompare(b.name)
        } else {
          return b.name.localeCompare(a.name)
        }
      })
    } else if (sortBy === "price") {
      result.sort((a, b) => {
        if (sortOrder === "asc") {
          return a.price - b.price
        } else {
          return b.price - a.price
        }
      })
    }

    setFilteredProducts(result)
    setCurrentPage(1)
  }, [selectedCategory, sortOrder, sortBy, searchQuery])

  // Calculate pagination
  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct)
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage)

  const handleCategoryChange = (categoryId: string | null) => {
    setSelectedCategory(categoryId)
  }

  const handleSortByName = () => {
    if (sortBy === "name" && sortOrder === "asc") {
      setSortOrder("desc")
    } else {
      setSortBy("name")
      setSortOrder("asc")
    }
  }

  const handleSortByPrice = () => {
    if (sortBy === "price" && sortOrder === "asc") {
      setSortOrder("desc")
    } else {
      setSortBy("price")
      setSortOrder("asc")
    }
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="container py-4 sm:py-8">
      <header>
        <h1 className="mb-4 text-2xl font-bold sm:mb-6 sm:text-3xl">Nuestros Productos</h1>
      </header>

      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm" className="lg:hidden">
                <Filter className="mr-2 h-4 w-4" />
                Filtros
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="py-4">
                <h3 className="mb-4 text-lg font-medium">Categorías</h3>
                <ProductFilters
                  categories={categories}
                  selectedCategory={selectedCategory}
                  onCategoryChange={handleCategoryChange}
                />
              </div>
            </SheetContent>
          </Sheet>
          <div className="flex items-center gap-2">
            <Button variant={sortBy === "name" ? "default" : "outline"} size="sm" onClick={handleSortByName}>
              Nombre
              {sortBy === "name" &&
                (sortOrder === "asc" ? <SortAsc className="ml-2 h-4 w-4" /> : <SortDesc className="ml-2 h-4 w-4" />)}
            </Button>
            <Button variant={sortBy === "price" ? "default" : "outline"} size="sm" onClick={handleSortByPrice}>
              Precio
              {sortBy === "price" &&
                (sortOrder === "asc" ? <SortAsc className="ml-2 h-4 w-4" /> : <SortDesc className="ml-2 h-4 w-4" />)}
            </Button>
          </div>
        </div>
        <div className="w-full sm:w-auto">
          <Input
            type="search"
            placeholder="Buscar productos..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full sm:w-[250px]"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
        <div className="hidden lg:block">
          <div className="sticky top-20 rounded-lg border p-4">
            <h3 className="mb-4 text-lg font-medium">Categorías</h3>
            <ProductFilters
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={handleCategoryChange}
            />
          </div>
        </div>

        <div className="lg:col-span-3">
          {currentProducts.length === 0 ? (
            <div className="flex h-40 items-center justify-center rounded-lg border">
              <p className="text-muted-foreground">No se encontraron productos</p>
            </div>
          ) : (
            <>
              <section className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3" role="main" aria-label="Lista de productos">
                {currentProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </section>

              {totalPages > 1 && (
                <div className="mt-8 flex justify-center">
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <Button
                        key={page}
                        variant={currentPage === page ? "default" : "outline"}
                        size="sm"
                        onClick={() => handlePageChange(page)}
                      >
                        {page}
                      </Button>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}
