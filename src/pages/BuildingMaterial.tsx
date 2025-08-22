import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/PageHeader';
import { MarqueeAnimation } from '@/components/ui/marquee-effect';

const BuildingMaterial = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const categories = [
    { id: 'all', name: 'All Products', count: 45 },
    { id: 'mosaic', name: 'Mosaic Tiles', count: 13 },
    { id: 'roofing', name: 'Roofing Solutions', count: 10 },
    { id: 'ceramic', name: 'Ceramic Tiles', count: 3 },
    { id: 'flooring', name: 'Wood Flooring', count: 6 },
    { id: 'polycarbonate', name: 'Polycarbonate Sheets', count: 4 },
    { id: 'glass-blocks', name: 'Glass Blocks', count: 9 }
  ];

  const products = [
    // Mosaic Tiles
    {
      id: 1,
      category: 'mosaic',
      name: 'Premium Stone Mosaic',
      code: 'MW100',
      description: 'Sophisticated dimensional stone mosaic featuring geometric cube patterns in natural earth tones',
      image: '/lovable-uploads/71f286fd-488e-42ad-9a6d-f3c45b43f49f.png',
      features: ['3D Geometric Design', 'Natural Stone', 'Premium Quality', 'Interior/Exterior Use']
    }, {
      id: 2,
      category: 'mosaic',
      name: 'Linear Mixed Glass Mosaic',
      code: 'BS112281A',
      description: 'Contemporary linear mosaic combining dark and light glass elements with textured finish',
      image: '/lovable-uploads/73ce77fa-4021-42a6-ada8-2546dd0a1cb8.png',
      features: ['Linear Design', 'Mixed Glass', 'Contemporary Style', 'Easy Installation']
    }, {
      id: 3,
      category: 'mosaic',
      name: 'Artistic Pattern Glass Mosaic',
      code: 'AP411',
      description: 'Elegant glass mosaic with decorative bronze medallions and varied square patterns',
      image: '/lovable-uploads/83eefa25-aedf-4481-9727-4d935dc8d2d7.png',
      features: ['Bronze Medallions', 'Glass Material', 'Artistic Pattern', 'Luxury Finish']
    }, {
      id: 4,
      category: 'mosaic',
      name: 'Wave Pattern Ceramic Mosaic',
      code: '12503',
      description: 'Dynamic wave-pattern mosaic in blue tones with metallic accent stripes',
      image: '/lovable-uploads/3efbacfa-9201-4f69-8dc1-a6abdb021355.png',
      features: ['Wave Pattern', 'Blue Ceramic', 'Metallic Accents', 'Dynamic Design']
    }, {
      id: 5,
      category: 'mosaic',
      name: 'Artistic Circle Mosaic',
      code: 'YMA192',
      description: 'Elegant diamond-shaped mosaic with circular patterns in warm brown and beige tones',
      image: '/lovable-uploads/7ba092f3-5084-4e13-bdf2-a79333895d55.png',
      features: ['Diamond Formation', 'Circle Patterns', 'Warm Tones', 'Artistic Design']
    }, {
      id: 6,
      category: 'mosaic',
      name: 'Classic Square Mosaic',
      code: 'ML155',
      description: 'Traditional square mosaic tiles in sophisticated grey and white marble combinations',
      image: '/lovable-uploads/84945b24-84bb-481c-910a-47a2056f4e11.png',
      features: ['Square Pattern', 'Marble Finish', 'Classic Design', 'Easy Installation']
    }, {
      id: 7,
      category: 'mosaic',
      name: 'Floral Pattern Mosaic',
      code: 'MA015',
      description: 'Luxurious mosaic featuring intricate floral designs in rich brown and gold tones',
      image: '/lovable-uploads/1ec45dae-5adb-40a5-889a-c683f021fdbd.png',
      features: ['Floral Motifs', 'Gold Accents', 'Luxury Finish', 'Statement Piece']
    }, {
      id: 8,
      category: 'mosaic',
      name: 'Contemporary Red Mosaic',
      code: 'MA017',
      description: 'Bold contemporary mosaic combining red glass with metallic accents and textured patterns',
      image: '/lovable-uploads/2f98ea22-5fba-4625-af21-98a2fb5cfcbb.png',
      features: ['Red Glass', 'Metallic Accents', 'Contemporary Style', 'Mixed Textures']
    }, {
      id: 9,
      category: 'mosaic',
      name: 'Botanical Glass Mosaic',
      code: 'MA012',
      description: 'Nature-inspired mosaic with botanical patterns in elegant grey and white glass',
      image: '/lovable-uploads/56edf7e4-84f2-4480-826a-8dbb0bed131c.png',
      features: ['Botanical Design', 'Glass Material', 'Nature Inspired', 'Elegant Finish']
    }, {
      id: 10,
      category: 'mosaic',
      name: 'Turquoise Ceramic Tiles',
      code: 'ID 8008',
      description: 'Vibrant turquoise ceramic tiles with crackle glaze finish for stunning accent walls',
      image: '/lovable-uploads/b5800e3d-8e6d-447e-ac4b-f13f2ae54cba.png',
      features: ['Turquoise Color', 'Crackle Glaze', 'Ceramic Material', 'Accent Feature']
    }, {
      id: 11,
      category: 'mosaic',
      name: 'Natural Beige Ceramic',
      code: 'IDB0019',
      description: 'Subtle beige ceramic tiles with natural texture, perfect for modern minimalist designs',
      image: '/lovable-uploads/86a52b59-d698-435c-83c1-8456ffcf94c7.png',
      features: ['Beige Tone', 'Natural Texture', 'Minimalist Style', 'Versatile Use']
    }, {
      id: 12,
      category: 'mosaic',
      name: 'Rich Brown Ceramic',
      code: 'IDB004',
      description: 'Deep brown ceramic tiles with glossy finish, ideal for creating warm, sophisticated spaces',
      image: '/lovable-uploads/081658ac-13fe-46e2-949e-caf303ec66d1.png',
      features: ['Deep Brown', 'Glossy Finish', 'Sophisticated Look', 'Warm Ambiance']
    }, {
      id: 13,
      category: 'mosaic',
      name: 'Textured Terra Cotta',
      code: 'TTC001',
      description: 'Artisanal terra cotta tiles with hand-crafted texture and earthy finish',
      image: '/lovable-uploads/23ef447d-537e-456f-914e-609dd3c85fc3.png',
      features: ['Terra Cotta Material', 'Hand-crafted Texture', 'Earthy Finish', 'Artisanal Quality']
    },
    // Roofing Solutions
    {
      id: 14,
      category: 'roofing',
      name: 'UPVC Wave Profile Sheets',
      code: 'UW-3L',
      description: 'Three-layer UPVC corrugated sheets with small wave design in vibrant blue and green',
      image: '/lovable-uploads/9f188a65-661f-494a-b90a-40ca7f38609a.png',
      features: ['3 Layer UPVC', 'Wave Design', '1.5-1.8mm Thickness', '10-16 Ft Length']
    }, {
      id: 15,
      category: 'roofing',
      name: 'UPVC Trapezoidal Sheets',
      code: 'UT-3L',
      description: 'Durable trapezoidal profile UPVC sheets ideal for industrial and residential roofing',
      image: '/lovable-uploads/05de19cf-99be-4689-b1f4-bfbe8de8b03b.png',
      features: ['Trapezoidal Design', '3 Layer UPVC', '1.5-1.8mm Thick', '3.71 Ft Width']
    }, {
      id: 16,
      category: 'roofing',
      name: 'ASA-PVC Corrugated Sheets',
      code: 'AP-4L',
      description: 'Four-layer ASA-PVC sheets with embossed surface for enhanced durability',
      image: '/lovable-uploads/0262cb78-5a75-4428-9b76-270d2b23382b.png',
      features: ['4 Layer ASA-PVC', 'Embossed Surface', '2mm Thickness', '12-16 Ft Length']
    }, {
      id: 17,
      category: 'roofing',
      name: 'Royal Style Clay Tiles',
      code: 'RST-KH',
      description: 'Premium ASA synthetic resin tiles in royal Khaprail style with embossed finish',
      image: '/lovable-uploads/c8df391f-84bd-4b87-b4d3-743c2aac7def.png',
      features: ['Royal Khaprail Style', 'ASA Synthetic Resin', '2.5mm Thickness', 'Hot Red/Brick Red']
    }, {
      id: 18,
      category: 'roofing',
      name: 'European Style Clay Tiles',
      code: 'EST-EU',
      description: 'Elegant European-style synthetic resin tiles with embossed surface finish',
      image: '/lovable-uploads/cabf8320-c72b-4872-a7b0-9987d5fe015d.png',
      features: ['Europe Style', 'ASA Synthetic Resin', '2.5mm Thickness', '18.86 Ft Length']
    }, {
      id: 19,
      category: 'roofing',
      name: 'Traditional Wave Tiles',
      code: 'TWT-OR',
      description: 'Classic wave-pattern roofing tiles in traditional orange terracotta finish',
      image: '/lovable-uploads/74326c28-5ac0-483c-b6d6-bdb84b84ee1f.png',
      features: ['Wave Pattern', 'Terracotta Finish', 'Traditional Style', 'Weather Resistant']
    }, {
      id: 20,
      category: 'roofing',
      name: 'FRP Transparent Wave Sheets',
      code: 'FRP-TW',
      description: 'Fiberglass reinforced plastic sheets with small wave and trapezoidal profiles',
      image: '/lovable-uploads/6dec5327-d9bf-413e-8910-cfceab8260f1.png',
      features: ['Transparent FRP', 'Small Wave Style', '1.8-1.5mm Thickness', '8-16 Ft Length']
    }, {
      id: 21,
      category: 'roofing',
      name: 'FRP Clear Corrugated Sheets',
      code: 'FRP-CC',
      description: 'Premium transparent FRP corrugated roofing sheets for natural light transmission',
      image: '/lovable-uploads/440b6f0d-ef71-435f-aab1-448b09dd25b1.png',
      features: ['Crystal Clear', 'Corrugated Profile', 'UV Resistant', 'Impact Resistant']
    }, {
      id: 22,
      category: 'roofing',
      name: 'Premium Slate Tiles',
      code: 'PST-001',
      description: 'Natural slate roofing tiles with premium finish and weather-resistant properties',
      image: '/lovable-uploads/17311636-9797-49db-8d63-131cc372e303.png',
      features: ['Natural Slate', 'Weather Resistant', 'Premium Finish', 'Long Lasting']
    }, {
      id: 23,
      category: 'roofing',
      name: 'Designer Metal Tiles',
      code: 'DMT-002',
      description: 'Contemporary metal roofing tiles with designer patterns and corrosion resistance',
      image: '/lovable-uploads/1c5a00cb-213c-4eec-b315-6945b015ad5c.png',
      features: ['Metal Construction', 'Designer Patterns', 'Corrosion Resistant', 'Modern Style']
    },
    // Ceramic Tiles - using proper building material images
    {
      id: 24,
      category: 'ceramic',
      name: 'Premium Stone Floor Tiles',
      code: 'PME-300',
      description: 'Premium stone ceramic floor tiles with natural texture and high durability',
      image: '/lovable-uploads/71f286fd-488e-42ad-9a6d-f3c45b43f49f.png',
      features: ['Stone Texture', 'High Durability', 'Natural Look', 'Easy Maintenance']
    }, {
      id: 25,
      category: 'ceramic',
      name: 'Classic Mosaic Ceramic',
      code: 'WLP-400',
      description: 'Classic ceramic tiles with mosaic patterns ideal for contemporary interiors',
      image: '/lovable-uploads/84945b24-84bb-481c-910a-47a2056f4e11.png',
      features: ['Mosaic Pattern', 'Ceramic Material', 'Contemporary Style', 'Versatile Application']
    }, {
      id: 26,
      category: 'ceramic',
      name: 'Textured Wall Ceramics',
      code: 'STS-500',
      description: 'Textured ceramic wall tiles with artistic patterns for accent walls',
      image: '/lovable-uploads/83eefa25-aedf-4481-9727-4d935dc8d2d7.png',
      features: ['Textured Surface', 'Artistic Pattern', 'Wall Application', 'Premium Finish']
    },
    // Wood Flooring - New products with uploaded images
    {
      id: 27,
      category: 'flooring',
      name: 'Dark Walnut Engineered Flooring',
      code: 'DWF-001',
      description: 'Premium dark walnut engineered wood flooring with rich grain patterns and durable finish',
      image: '/lovable-uploads/a4cbf7ae-40f3-46fd-a559-fad3e1f07701.png',
      features: ['Dark Walnut', 'Engineered Wood', 'Rich Grain', 'Durable Finish']
    }, {
      id: 28,
      category: 'flooring',
      name: 'Medium Oak Luxury Planks',
      code: 'MOL-002',
      description: 'Sophisticated medium oak luxury vinyl planks with authentic wood texture',
      image: '/lovable-uploads/c42d946b-3292-4e2f-b608-9ab25b371faa.png',
      features: ['Medium Oak', 'Luxury Vinyl', 'Authentic Texture', 'Water Resistant']
    }, {
      id: 29,
      category: 'flooring',
      name: 'Multi-Tone Parquet Collection',
      code: 'MTP-003',
      description: 'Classic parquet flooring featuring multiple wood tones in traditional block pattern',
      image: '/lovable-uploads/1d94a384-6920-4936-8835-59ea037e2385.png',
      features: ['Multi-Tone Wood', 'Parquet Pattern', 'Classic Design', 'Premium Quality']
    }, {
      id: 30,
      category: 'flooring',
      name: 'Natural Bamboo Strips',
      code: 'NBS-004',
      description: 'Eco-friendly natural bamboo flooring strips with vertical grain pattern',
      image: '/lovable-uploads/66d9bd1c-9a42-4796-9e3b-92a9cbbe4b18.png',
      features: ['Natural Bamboo', 'Vertical Grain', 'Eco-Friendly', 'Sustainable Material']
    }, {
      id: 31,
      category: 'flooring',
      name: 'Light Oak Engineered Planks',
      code: 'LOE-005',
      description: 'Light oak engineered wood planks with natural knots and grain variations',
      image: '/lovable-uploads/93dcdacd-0949-4704-8ba2-9c3c1daeebed.png',
      features: ['Light Oak', 'Natural Knots', 'Engineered Wood', 'Variable Grain']
    }, {
      id: 32,
      category: 'flooring',
      name: 'Premium Teak Flooring',
      code: 'PTF-006',
      description: 'Luxurious teak wood flooring with smooth finish and consistent grain pattern',
      image: '/lovable-uploads/5b80a5be-4351-4e04-890b-123fa7d02cc6.png',
      features: ['Premium Teak', 'Smooth Finish', 'Consistent Grain', 'Luxury Grade']
    },
    // Polycarbonate Sheets
    {
      id: 33,
      category: 'polycarbonate',
      name: 'Polycarbonate Hollow Sheets',
      code: 'PC-HS',
      description: 'Multi-color polycarbonate hollow sheets with excellent light transmission and thermal insulation',
      image: '/lovable-uploads/337263c3-e709-438f-8a16-7d6d05455361.png',
      features: ['6mm Thickness', '19 Ft Length', '7 Ft Width', 'Multiple Colors Available']
    }, {
      id: 34,
      category: 'polycarbonate',
      name: 'Colored Polycarbonate Collection',
      code: 'PC-CC',
      description: 'Vibrant colored polycarbonate sheets in brown, light blue, green, opal, clear, red, dark blue and yellow',
      image: '/lovable-uploads/fbce42cb-ad6a-4752-b8db-1de96a28df42.png',
      features: ['8 Color Options', 'UV Protection', 'Impact Resistant', 'Weather Resistant']
    }, {
      id: 35,
      category: 'polycarbonate',
      name: 'Clear Polycarbonate Panels',
      code: 'PC-CP',
      description: 'Crystal clear polycarbonate panels for maximum light transmission and visibility',
      image: '/lovable-uploads/440b6f0d-ef71-435f-aab1-448b09dd25b1.png',
      features: ['Crystal Clear', 'Maximum Light', 'High Impact', 'Easy Installation']
    }, {
      id: 36,
      category: 'polycarbonate',
      name: 'Textured Polycarbonate Sheets',
      code: 'PC-TS',
      description: 'Textured surface polycarbonate sheets providing privacy while maintaining light transmission',
      image: '/lovable-uploads/6dec5327-d9bf-413e-8910-cfceab8260f1.png',
      features: ['Textured Surface', 'Privacy Enhancement', 'Light Diffusion', 'Decorative Appeal']
    },
    // Glass Blocks - Updated with new products from your images
    {
      id: 37,
      category: 'glass-blocks',
      name: 'Clear Wave Glass Blocks',
      code: '80302',
      description: 'Premium wave design glass blocks (7½" x 3¾" x 3") with clear/white/transparent finish',
      image: '/lovable-uploads/38f97af4-835a-48c1-86fb-aca0726b6fee.png',
      features: ['Wave Design', '10 Pcs/Ctn', 'Clear/White/Transparent', 'Premium Quality']
    }, {
      id: 38,
      category: 'glass-blocks',
      name: 'Decorative Glass Blocks',
      code: '80321',
      description: 'Artistic glass blocks (7½" x 3¾" x 3") with sophisticated decorative patterns',
      image: '/lovable-uploads/1221495a-3a55-4cc2-bb90-5e9e4b3e01dc.png',
      features: ['Decorative Pattern', '10 Pcs/Ctn', 'Artistic Design', 'Light Enhancement']
    }, {
      id: 39,
      category: 'glass-blocks',
      name: 'Textured Glass Block Collection',
      code: '80352',
      description: 'Toba design glass blocks featuring unique textured surfaces for enhanced visual appeal',
      image: '/lovable-uploads/7db91594-5eb5-4539-b4ef-057d7ca186ce.png',
      features: ['Toba Design', 'Textured Surface', 'Visual Appeal', 'Architectural Grade']
    }, {
      id: 40,
      category: 'glass-blocks',
      name: 'Bromo Wave Glass Blocks',
      code: '80053',
      description: 'Elegant Bromo wave design glass blocks (7½" x 7½" x 3") with flowing wave patterns',
      image: '/lovable-uploads/0e57d0c9-a4f1-4929-a2e0-1576fbd74175.png',
      features: ['Bromo Wave Design', '6 Pcs/Ctn', 'Clear/White/Transparent', 'Flowing Patterns']
    }, {
      id: 41,
      category: 'glass-blocks',
      name: 'Linear Glass Block Collection',
      code: '80058',
      description: 'Contemporary linear glass blocks (7½" x 7½" x 3") with vertical line patterns for modern aesthetics',
      image: '/lovable-uploads/0a74d2ce-682c-4f0e-ba89-478f2048e1e8.png',
      features: ['Linear Design', '6 Pcs/Ctn', 'Modern Aesthetic', 'Vertical Patterns']
    }, {
      id: 42,
      category: 'glass-blocks',
      name: 'Mosaic Pattern Glass Blocks',
      code: '80099TN',
      description: 'Sophisticated mosaic pattern glass blocks (7½" x 3½" x 3") with irregular geometric designs',
      image: '/lovable-uploads/f55a2432-2008-4588-b28f-8ae5aa0ffae5.png',
      features: ['Mosaic Pattern', '6 Pcs/Ctn', 'Geometric Design', 'Clear/White/Transparent']
    }, {
      id: 43,
      category: 'glass-blocks',
      name: 'Quadra Glass Blocks',
      code: '80401',
      description: 'Unique Quadra design glass blocks (4½" x 4½" x 3") with parallel line patterns',
      image: '/lovable-uploads/af22f5d1-dd8b-4638-b618-efe1330ed384.png',
      features: ['Quadra Design', '16 Pcs/Ctn', 'Compact Size', 'Clear/White/Transparent']
    }, {
      id: 44,
      category: 'glass-blocks',
      name: 'Wave Design Glass Blocks',
      code: '79202',
      description: 'Classic wave design glass blocks (6"x6"x3") with smooth flowing wave patterns',
      image: '/lovable-uploads/f94b980b-66ec-420a-8401-ce0192864544.png',
      features: ['Wave Design', '10 Pcs/Ctn', 'Classic Style', 'Clear/White/Transparent']
    }, {
      id: 45,
      category: 'glass-blocks',
      name: 'Ice Bert Glass Blocks',
      code: '79206',
      description: 'Distinctive Ice Bert design glass blocks (6"x6"x3") with textured ice-like surface patterns',
      image: '/lovable-uploads/30a7e259-fcd7-4193-993d-a72f0fd77968.png',
      features: ['Ice Bert Design', '10 Pcs/Ctn', 'Textured Surface', 'Clear/White/Transparent']
    }];
  
  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="mt-16 min-h-screen">
      {/* Header */}
      <PageHeader 
        title="Premium Building Materials & Solutions" 
        subtitle="Architectural excellence through innovative construction materials" 
        backgroundImage="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&h=600&fit=crop" 
      />

      {/* Enhanced Category Filter Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6">
              Material <span className="bg-gradient-to-r from-pg-red to-red-600 bg-clip-text text-transparent">Categories</span>
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Discover our extensive range of building materials organized by specialty categories
            </p>
          </div>

          {/* Modern Responsive Category Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4 mb-12 md:mb-16">
            {categories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`group relative overflow-hidden p-4 md:p-6 rounded-2xl md:rounded-3xl font-semibold transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-pg-red to-red-600 text-white shadow-2xl shadow-pg-red/25'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200 hover:border-pg-red hover:shadow-lg'
                }`}
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className="relative z-10 flex flex-col items-center gap-2 md:gap-3">
                  <span className="text-sm md:text-base lg:text-lg font-bold text-center leading-tight">
                    {category.name}
                  </span>
                  <div className={`flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full text-xs md:text-sm font-bold ${
                    selectedCategory === category.id 
                      ? 'bg-white/20 text-white' 
                      : 'bg-pg-red text-white'
                  }`}>
                    {category.count}
                  </div>
                </div>
                
                {/* Hover Animation Background */}
                {selectedCategory !== category.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-pg-red to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-2xl md:rounded-3xl"></div>
                )}
                
                {/* Active State Indicator */}
                {selectedCategory === category.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-pg-red via-red-500 to-red-600 rounded-2xl md:rounded-3xl"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Products Grid Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6">
              {selectedCategory === 'all' 
                ? 'Complete Product Portfolio' 
                : categories.find(c => c.id === selectedCategory)?.name} Collection
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 md:gap-4 text-lg md:text-xl text-gray-600">
              <span className="font-semibold">{filteredProducts.length} premium products available</span>
              <span className="hidden sm:inline text-pg-red">•</span>
              <span className="text-pg-red font-semibold">Professional Grade Materials</span>
            </div>
          </div>

          {/* Responsive Products Grid with Enhanced Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className="group bg-white rounded-2xl md:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-700 overflow-hidden border border-gray-100 hover:-translate-y-2 hover:border-pg-red/20"
                style={{
                  animationDelay: `${index * 0.05}s`
                }}
              >
                {/* Enhanced Product Image */}
                <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 aspect-square">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Product Code Badge */}
                  <div className="absolute top-3 md:top-4 left-3 md:left-4 bg-white/95 backdrop-blur-sm px-2 md:px-3 py-1 md:py-2 rounded-lg md:rounded-xl shadow-lg">
                    <span className="text-xs md:text-sm font-bold text-gray-800">{product.code}</span>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 md:top-4 right-3 md:right-4 bg-gradient-to-r from-pg-red to-red-600 px-2 md:px-3 py-1 md:py-2 rounded-lg md:rounded-xl shadow-lg">
                    <span className="text-xs font-bold text-white uppercase tracking-wide">
                      {product.category.replace('-', ' ')}
                    </span>
                  </div>
                </div>

                {/* Enhanced Product Details */}
                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 group-hover:text-pg-red transition-colors duration-300 leading-tight">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3 md:mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  
                  {/* Enhanced Features */}
                  <div className="mb-4 md:mb-6">
                    <h4 className="text-xs md:text-sm font-bold text-gray-900 mb-2 md:mb-3">Key Features:</h4>
                    <div className="space-y-1 md:space-y-2">
                      {product.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-xs md:text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gradient-to-r from-pg-red to-red-600 rounded-full mr-2 md:mr-3 flex-shrink-0"></div>
                          <span className="leading-tight">{feature}</span>
                        </div>
                      ))}
                      {product.features.length > 3 && (
                        <div className="text-xs md:text-sm text-pg-red font-medium">
                          +{product.features.length - 3} more features
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Product Actions */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 px-2 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm font-bold">
                      <span className="text-gray-500 mr-1 md:mr-2">SKU:</span>
                      <span className="truncate">{product.code}</span>
                    </div>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 border-pg-red text-pg-red hover:bg-pg-red hover:text-white text-xs md:text-sm px-2 md:px-4"
                    >
                      Details
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee Animation Section */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-black via-gray-900 to-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6">
              Construction <span className="text-pg-red">Excellence</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8 md:mb-12">
              Our building materials represent the pinnacle of construction innovation, 
              combining superior quality with architectural aesthetics for exceptional building solutions.
            </p>
          </div>

          {/* Marquee Animations */}
          <div className="space-y-6 md:space-y-8">
            <MarqueeAnimation direction="left" baseVelocity={-2} className="text-pg-red py-3 md:py-4">
              PREMIUM MATERIALS • ARCHITECTURAL INNOVATION • CONSTRUCTION EXCELLENCE
            </MarqueeAnimation>
            
            <MarqueeAnimation direction="right" baseVelocity={-2} className="text-white py-3 md:py-4">
              SUPERIOR QUALITY • DESIGN AESTHETICS • PROVEN DURABILITY
            </MarqueeAnimation>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BuildingMaterial;
