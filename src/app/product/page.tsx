'use client'

import Image from "next/image"
import { useState, useMemo } from "react"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  subcategory: string;
  subsubcategory: string;
  image: string;
}

interface PriceRanges {
  [category: string]: [number, number];
}

interface SearchTerms {
  [category: string]: string;
}

interface CategoryStructure {
  [category: string]: {
    [subcategory: string]: string[];
  };
}

const generateProducts = (): Product[] => {
  const products: Product[] = [];
  let id = 1;

  const generateProduct = (category: string, subcategory: string, subsubcategory: string) => {
    const price = Math.floor(Math.random() * 1000000) + 1000;
    return {
      id: id++,
      name: `#${id.toString().padStart(3, '0')}`,
      price,
      category,
      subcategory,
      subsubcategory,
      image: '/placeholder.svg'
    };
  };

  // Livestock
  for (let i = 0; i < 100; i++) {
    products.push(generateProduct('Livestock', 'Cows', ['Holstein Cow', 'Angus Cow', 'Jersey Cow'][i % 3]));
    products.push(generateProduct('Livestock', 'Goats', ['Boer Goat', 'Nubian Goat', 'Alpine Goat'][i % 3]));
  }

  // Poultry
  for (let i = 0; i < 100; i++) {
    products.push(generateProduct('Poultry', 'Chicken', ['Broiler Chicken', 'Layer Hen', 'Free Range'][i % 3]));
    products.push(generateProduct('Poultry', 'Ducks', ['Pekin Duck', 'Muscovy Duck', 'Runner Duck'][i % 3]));
  }

  // Animal Feed
  for (let i = 0; i < 100; i++) {
    products.push(generateProduct('Animal Feed', 'Cattle Feed', ['Hay', 'Silage', 'Grain'][i % 3]));
    products.push(generateProduct('Animal Feed', 'Poultry Feed', ['Starter Feed', 'Grower Feed', 'Layer Feed'][i % 3]));
  }

  // Fertilizer
  for (let i = 0; i < 100; i++) {
    products.push(generateProduct('Fertilizer', 'Organic', ['Compost', 'Manure', 'Bone Meal'][i % 3]));
    products.push(generateProduct('Fertilizer', 'Chemical', ['NPK', 'Urea', 'Phosphate'][i % 3]));
  }

  return products;
};

const products = generateProducts();

const categoryStructure: CategoryStructure = {
  'All': { 'All': ['All'] },
  'Livestock': {
    'All': ['All'],
    'Cows': ['All', 'Holstein Cow', 'Angus Cow', 'Jersey Cow'],
    'Goats': ['All', 'Boer Goat', 'Nubian Goat', 'Alpine Goat']
  },
  'Poultry': {
    'All': ['All'],
    'Chicken': ['All', 'Broiler Chicken', 'Layer Hen', 'Free Range'],
    'Ducks': ['All', 'Pekin Duck', 'Muscovy Duck', 'Runner Duck']
  },
  'Animal Feed': {
    'All': ['All'],
    'Cattle Feed': ['All', 'Hay', 'Silage', 'Grain'],
    'Poultry Feed': ['All', 'Starter Feed', 'Grower Feed', 'Layer Feed']
  },
  'Fertilizer': {
    'All': ['All'],
    'Organic': ['All', 'Compost', 'Manure', 'Bone Meal'],
    'Chemical': ['All', 'NPK', 'Urea', 'Phosphate']
  }
}

const categories: string[] = Object.keys(categoryStructure)

const addToCart = (product: Product) => {
  console.log(`${product.name} has been added to the cart.`);
}

export default function Products() {
  const [priceRanges, setPriceRanges] = useState<PriceRanges>(
    categories.reduce((acc, category) => ({ ...acc, [category]: [0, 2000000] as [number, number] }), {} as PriceRanges)
  )
  const [searchTerms, setSearchTerms] = useState<SearchTerms>(
    categories.reduce((acc, category) => ({ ...acc, [category]: '' }), {} as SearchTerms)
  )
  const [selectedSubcategories, setSelectedSubcategories] = useState<SearchTerms>(
    categories.reduce((acc, category) => ({ ...acc, [category]: 'All' }), {} as SearchTerms)
  )
  const [selectedSubsubcategories, setSelectedSubsubcategories] = useState<SearchTerms>(
    categories.reduce((acc, category) => ({ ...acc, [category]: 'All' }), {} as SearchTerms)
  )
  const [currentPage, setCurrentPage] = useState<{ [key: string]: number }>(
    categories.reduce((acc, category) => ({ ...acc, [category]: 1 }), {})
  )

  const filterProducts = (category: string): Product[] => {
    return products.filter((product) => 
      (category === 'All' || product.category === category) &&
      (selectedSubcategories[category] === 'All' || product.subcategory === selectedSubcategories[category]) &&
      (selectedSubsubcategories[category] === 'All' || product.subsubcategory === selectedSubsubcategories[category]) &&
      (product.price >= priceRanges[category][0] && product.price <= priceRanges[category][1]) &&
      product.name.toLowerCase().includes(searchTerms[category].toLowerCase())
    )
  }

  const handleFilter = (category: string) => {
    setCurrentPage(prev => ({ ...prev, [category]: 1 }));
  }

  const paginateProducts = (products: Product[], page: number, pageSize: number) => {
    const startIndex = (page - 1) * pageSize;
    return products.slice(startIndex, startIndex + pageSize);
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-center font-bold text-6xl mb-6">Products Marketplace</h1>

      <Tabs defaultValue="All" className="w-full">
        <TabsList className="mb-4">
          {categories.map((category) => (
            <TabsTrigger key={category} value={category}>{category}</TabsTrigger>
          ))}
        </TabsList>

        {categories.map((category) => {
          const filteredProducts = filterProducts(category);
          const totalPages = Math.ceil(filteredProducts.length / 50);
          const paginatedProducts = paginateProducts(filteredProducts, currentPage[category], 50);

          return (
            <TabsContent key={category} value={category}>
              <div className="mb-6 space-y-4">
                <div className="flex gap-4 flex-wrap">
                  <Input
                    type="text"
                    placeholder="Search item"
                    value={searchTerms[category]}
                    onChange={(e) => setSearchTerms(prev => ({ ...prev, [category]: e.target.value }))}
                    className="w-full md:w-64"
                  />
                  <Select
                    value={selectedSubcategories[category]}
                    onValueChange={(value) => {
                      setSelectedSubcategories(prev => ({ ...prev, [category]: value }));
                      setSelectedSubsubcategories(prev => ({ ...prev, [category]: 'All' }));
                    }}
                  >
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select subcategory" />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.keys(categoryStructure[category]).map((subcategory) => (
                        <SelectItem key={subcategory} value={subcategory}>
                          {subcategory}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {selectedSubcategories[category] !== 'All' && (
                    <Select
                      value={selectedSubsubcategories[category]}
                      onValueChange={(value) => setSelectedSubsubcategories(prev => ({ ...prev, [category]: value }))}
                    >
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select sub-subcategory" />
                      </SelectTrigger>
                      <SelectContent>
                        {categoryStructure[category][selectedSubcategories[category]].map((subsubcategory) => (
                          <SelectItem key={subsubcategory} value={subsubcategory}>
                            {subsubcategory}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                  <Button onClick={() => handleFilter(category)}>Apply Filters</Button>
                </div>
                <div className="space-y-2">
                  <Label>Price range: TZS{priceRanges[category][0]} - TZS{priceRanges[category][1]}</Label>
                  <Slider
                    min={0}
                    max={2000000}
                    step={1000}
                    value={priceRanges[category]}
                    onValueChange={(value) => setPriceRanges(prev => ({ ...prev, [category]: value as [number, number] }))}
                    className="w-full md:w-96"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {paginatedProducts.map((product) => (
                  <Card key={product.id} className="flex flex-col">
                    <CardHeader>
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={200}
                        height={200}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                    </CardHeader>
                    <CardContent>
                      <CardTitle className="mb-2">{product.name}</CardTitle>
                      <p className="text-2xl font-bold">TZS {product.price.toFixed(2)}</p>
                      <p className="text-sm text-gray-500">{product.category} - {product.subcategory} - {product.subsubcategory}</p>
                    </CardContent>
                    <CardFooter className="mt-auto">
                      <Button onClick={() => addToCart(product)} className="w-full">
                        Buy Product
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>

              <div className="flex justify-between items-center mt-6">
                <Button
                  onClick={() => setCurrentPage(prev => ({ ...prev, [category]: Math.max(1, prev[category] - 1) }))}
                  disabled={currentPage[category] === 1}
                >
                  <ChevronLeft className="h-4 w-4 mr-2" />
                  Previous
                </Button>
                <span>Page {currentPage[category]} of {totalPages}</span>
                <Button
                  onClick={() => setCurrentPage(prev => ({ ...prev, [category]: Math.min(totalPages, prev[category] + 1) }))}
                  disabled={currentPage[category] === totalPages}
                >
                  Next
                  <ChevronRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </TabsContent>
          );
        })}
      </Tabs>
    </div>
  )
}