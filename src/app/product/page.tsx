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

const products: Product[] = [
  { id: 1, name: '#302', price: 120000, category: 'Livestock', subcategory: 'Cows', subsubcategory: 'Holstein Cow', image: '/cow-product.jpg' },
  { id: 2, name: '#303', price: 1500000, category: 'Livestock', subcategory: 'Cows', subsubcategory: 'Angus Cow', image: '/cow-product.jpg' },
  { id: 3, name: '#304', price: 3000000, category: 'Livestock', subcategory: 'Goats', subsubcategory: 'Boer Goat', image: '/goat-product.jpg' },
  { id: 4, name: '#305', price: 35000, category: 'Livestock', subcategory: 'Goats', subsubcategory: 'Nubian Goat', image: '/placeholder.svg' },
  { id: 5, name: '#306', price: 1002385, category: 'Poultry', subcategory: 'Chicken', subsubcategory: 'Broiler Chicken', image: '/poultry-product.jpg' },
  { id: 6, name: '#307', price: 20312377, category: 'Poultry', subcategory: 'Chicken', subsubcategory: 'Layer Hen', image: '/placeholder.svg' },
  { id: 7, name: '#308', price: 5011009, category: 'Animal Feed', subcategory: 'Cattle Feed', subsubcategory: 'Hay', image: '/placeholder.svg' },
  { id: 8, name: '#309', price: 4323230, category: 'Animal Feed', subcategory: 'Poultry Feed', subsubcategory: 'Starter Feed', image: '/placeholder.svg' },
  { id: 9, name: '#310', price: 30, category: 'Fertilizer', subcategory: 'Organic', subsubcategory: 'Compost', image: '/placeholder.svg' },
  { id: 10, name: '#311', price: 35, category: 'Fertilizer', subcategory: 'Chemical', subsubcategory: 'NPK', image: '/placeholder.svg' },
]

const categoryStructure: CategoryStructure = {
  'All': { 'All': ['All'] },
  'Livestock': {
    'All': ['All'],
    'Cows': ['All', 'Holstein Cow', 'Angus Cow', 'Jersey Cow'],
    'Goats': ['All', 'Boer Goat', 'Nubian Goat', 'Alpine Goat']
  },
  'Poultry': {
    'All': ['All'],
    'Chicken': ['All', 'Broiler Chicken', 'Layer Hen', 'Free Range']
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
    // This function is called when the filter button is clicked
    // You can add any additional logic here if needed
    console.log(`Filtering ${category} with subcategory ${selectedSubcategories[category]} and sub-subcategory ${selectedSubsubcategories[category]}`);
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

        {categories.map((category) => (
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
              {filterProducts(category).map((product) => (
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
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}