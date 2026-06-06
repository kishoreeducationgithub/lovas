import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, ShoppingCart, Check, Award, Eye } from 'lucide-react'

export default function MangoUniverse({ onAddToCart }) {
  const [selectedId, setSelectedId] = useState('alphonso')
  const [addedNotify, setAddedNotify] = useState(false)

  const mangoData = {
    alphonso: {
      id: 'alphonso',
      name: 'Alphonso Elite',
      region: 'Devgad Coastline',
      price: 4.99,
      profile: 'Royal Honeyed Sweetness',
      description: 'The centerpiece of our collection. Handpicked at peak ripeness. Has an unmatched buttery saffron pulp with honeyed sweetness.',
      taste: { sweetness: 98, acidity: 15, aroma: 100 },
      image: '/mango_1.jpg'
    },
    kesar: {
      id: 'kesar',
      name: 'Kesar Royal',
      region: 'Gir Hills Foothills',
      price: 3.99,
      profile: 'Fragrant Saffron Nectar',
      description: 'Intensely fragrant with a deep saffron skin hue. Balanced sweetness with a rich nectar-like texture.',
      taste: { sweetness: 92, acidity: 20, aroma: 98 },
      image: '/mango_2.jpg'
    },
    dasheri: {
      id: 'dasheri',
      name: 'Dasheri Sweet',
      region: 'Malihabad Orchards',
      price: 3.49,
      profile: 'Heritage Fiber-Free Pulp',
      description: 'A heritage variety with historical pedigree. Elongated shape, thin seed, melting fiber-free pulp.',
      taste: { sweetness: 95, acidity: 12, aroma: 90 },
      image: '/mango_3.jpg'
    },
    himsagar: {
      id: 'himsagar',
      name: 'Himsagar Rare',
      region: 'Bengal Plains',
      price: 4.49,
      profile: 'Rare Green-Golden Cream',
      description: 'An exotic and rare variety. Retains a rich green-yellow coat even when perfectly ripe. Creamy and sweet.',
      taste: { sweetness: 96, acidity: 10, aroma: 95 },
      image: '/mango_4.jpg'
    },
    totapuri: {
      id: 'totapuri',
      name: 'Totapuri Tangy',
      region: 'Krishnagiri Valley',
      price: 2.99,
      profile: 'Tangy Sweet-and-Sour Profile',
      description: 'Famous for its beak-like curvature. Firm, crisp yellow-green skin, punchy sweet-and-sour profile, perfect for gourmet salads.',
      taste: { sweetness: 75, acidity: 45, aroma: 80 },
      image: '/mango_5.jpg'
    },
    langra: {
      id: 'langra',
      name: 'Langra Traditional',
      region: 'Varanasi Orchards',
      price: 3.29,
      profile: 'Juicy Pine-Tropical Blend',
      description: 'A rich, traditional, green-skinned classic. Intense pine-like tropical aroma, highly juicy pulp.',
      taste: { sweetness: 94, acidity: 18, aroma: 97 },
      image: '/mango_6.jpg'
    }
  }

  const currentMango = mangoData[selectedId]

  return (
    <section 
      id="mango-universe" 
      className="py-20 sm:py-24 bg-darkwood dark:bg-black transition-colors duration-300 relative z-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs font-bold text-mango tracking-wider uppercase flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            Premium Orchard Showcase
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-cream">
            Exquisite Mango Varieties
          </h2>
          <div className="h-1 w-16 bg-mango mx-auto mt-3 rounded-full" />
          <p className="text-cream/60 mt-4 text-sm sm:text-base">
            Select any premium mango variety below to explore its hand-picked photo, origin details, and tasting profile.
          </p>
        </div>

        {/* The Container & Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch bg-darkwood-dark/50 border border-white/5 rounded-[32px] p-4 sm:p-6 lg:p-8 backdrop-blur-sm min-h-[620px]">
          
          {/* Left / Selector Panel: Mango Selector items (3 cols) */}
          <div className="lg:col-span-3 flex flex-row lg:flex-col justify-start lg:justify-center gap-2 overflow-x-auto lg:overflow-x-visible no-scrollbar pb-3 lg:pb-0">
            {Object.values(mangoData).map((m) => (
              <button
                key={m.id}
                onClick={() => setSelectedId(m.id)}
                className={`flex-shrink-0 lg:w-full p-4 rounded-2xl border text-left transition-all duration-300 cursor-pointer ${
                  selectedId === m.id
                    ? 'border-mango bg-mango/10 text-cream shadow-lg shadow-mango/5'
                    : 'border-white/5 bg-white/2 hover:border-white/10 text-cream/70 hover:text-cream'
                }`}
              >
                <div className="flex justify-between items-center gap-3">
                  <div>
                    <h4 className="text-sm font-bold">{m.name}</h4>
                    <p className="text-[10px] text-cream/50 mt-0.5">{m.region}</p>
                  </div>
                  <img
                    src={m.image}
                    alt={m.name}
                    className={`w-10 h-10 rounded-full object-cover border transition-all duration-300 ${
                      selectedId === m.id ? 'border-mango border-2' : 'border-white/10'
                    }`}
                  />
                </div>
              </button>
            ))}
          </div>

          {/* Center: The Photo Viewport (6 cols) */}
          <div className="lg:col-span-6 relative rounded-[24px] overflow-hidden bg-black/45 border border-white/5 h-[450px] flex items-center justify-center shadow-inner group">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedId}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.04 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full"
              >
                {/* Background blurred glow of the image */}
                <div 
                  className="absolute inset-0 scale-110 blur-xl opacity-20 transition-all duration-500"
                  style={{
                    backgroundImage: `url(${currentMango.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
                
                {/* Main Image */}
                <img
                  src={currentMango.image}
                  alt={currentMango.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Subtle vignette/gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
              </motion.div>
            </AnimatePresence>

            {/* Information overlay badges */}
            <div className="absolute top-4 left-4 pointer-events-none flex items-center gap-2">
              <div className="flex items-center gap-1.5 bg-black/60 border border-white/10 rounded-full px-3.5 py-1.5 text-[10px] sm:text-xs text-cream/80 backdrop-blur-md">
                <Award className="w-3.5 h-3.5 text-mango" />
                <span>Premium Grade</span>
              </div>
              <div className="flex items-center gap-1.5 bg-black/60 border border-white/10 rounded-full px-3.5 py-1.5 text-[10px] sm:text-xs text-cream/80 backdrop-blur-md">
                <Eye className="w-3.5 h-3.5 text-mango" />
                <span>100% Organic</span>
              </div>
            </div>

            {/* Photo description badge at the bottom */}
            <div className="absolute bottom-4 left-4 right-4 pointer-events-none">
              <div className="bg-black/60 border border-white/10 rounded-2xl p-3 text-xs text-cream/80 backdrop-blur-md flex justify-between items-center">
                <span>Origin: <strong className="text-mango">{currentMango.region}</strong></span>
                <span className="text-mango font-bold text-sm">${currentMango.price} each</span>
              </div>
            </div>
          </div>

          {/* Right: Selected Mango Details Sidebar (3 cols) */}
          <div className="lg:col-span-3 flex flex-col justify-between text-left text-cream relative">
            <AnimatePresence mode="wait">
              {currentMango && (
                <motion.div
                  key={currentMango.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col justify-between h-full space-y-6"
                >
                  <div className="space-y-5">
                    {/* Header */}
                    <div>
                      <span className="text-[10px] font-bold text-mango uppercase tracking-widest">
                        {currentMango.region}
                      </span>
                      <h3 className="font-playfair text-xl sm:text-2xl font-bold mt-1">
                        {currentMango.name}
                      </h3>
                      <div className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full px-2.5 py-1 text-[10px] text-cream/80 mt-2 font-mono">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                        Profile: {currentMango.profile}
                      </div>
                    </div>

                    {/* Paragraph */}
                    <p className="text-xs text-cream/70 leading-relaxed">
                      {currentMango.description}
                    </p>

                    {/* Dials stats */}
                    <div className="space-y-3 pt-2">
                      <h4 className="text-[10.5px] font-bold uppercase tracking-wider text-cream/50">Tasting Metrics</h4>
                      
                      {/* Sweetness */}
                      <div className="space-y-1">
                        <div className="flex justify-between text-[10px] font-bold text-cream/70">
                          <span>Brix Sweetness</span>
                          <span>{currentMango.taste.sweetness}%</span>
                        </div>
                        <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full bg-mango rounded-full" style={{ width: `${currentMango.taste.sweetness}%` }} />
                        </div>
                      </div>

                      {/* Aroma */}
                      <div className="space-y-1">
                        <div className="flex justify-between text-[10px] font-bold text-cream/70">
                          <span>Tropical Aroma</span>
                          <span>{currentMango.taste.aroma}%</span>
                        </div>
                        <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full bg-orange-500 rounded-full" style={{ width: `${currentMango.taste.aroma}%` }} />
                        </div>
                      </div>

                      {/* Acidity */}
                      <div className="space-y-1">
                        <div className="flex justify-between text-[10px] font-bold text-cream/70">
                          <span>Acidity & Tang</span>
                          <span>{currentMango.taste.acidity}%</span>
                        </div>
                        <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full bg-emerald-600 rounded-full" style={{ width: `${currentMango.taste.acidity}%` }} />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Add to Cart Actions */}
                  <div className="pt-4 border-t border-white/10">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-[10.5px] font-bold text-cream/50 uppercase">Harvest Price</span>
                      <span className="text-xl font-black text-mango">${currentMango.price}</span>
                    </div>

                    <button
                      onClick={() => {
                        onAddToCart({
                          id: currentMango.id,
                          name: currentMango.name,
                          description: `Premium single mango from ${currentMango.region}`,
                          price: currentMango.price,
                          unit: 'each',
                          quantity: 1
                        })
                        setAddedNotify(true)
                        setTimeout(() => setAddedNotify(false), 2000)
                      }}
                      className="w-full py-3.5 bg-mango hover:bg-mango-dark text-darkwood font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 shadow-lg shadow-mango/5 transition-all duration-300 cursor-pointer"
                    >
                      {addedNotify ? (
                        <>
                          <Check className="w-4 h-4" /> Added to Crate!
                        </>
                      ) : (
                        <>
                          <ShoppingCart className="w-4 h-4" /> Add to Cart
                        </>
                      )}
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  )
}
