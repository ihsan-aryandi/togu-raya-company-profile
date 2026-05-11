// Copy to clipboard
const copyToClipboardElements = document.querySelectorAll(".copy-to-clipboard")

copyToClipboardElements.forEach(el => {
    el.addEventListener("click", e => {
        e.preventDefault()

        copyText(e.currentTarget.dataset.copy)
    })
})

function copyText(text) {
    navigator.clipboard.writeText(text)
        .then(() => {
            alert("Teks berhasil dicopy!");
        })
        .catch(err => {
            console.error("Gagal copy:", err);
        });
}

// Product Modal
const productList = [
    {
        id: "chemical",
        name: "Chemical",
        description: "Produk kimia industri berkualitas tinggi untuk mendukung efisiensi dan keamanan proses produksi Anda.",
        images: [
            "image/product/chemical-1.jpeg",
            "image/product/chemical-2.jpeg",
        ]
    },
    {
        id: "chemicalCleaning",
        name: "Chemical Cleaning",
        description: "Solusi pembersih food grade & non food grade yang efektif menjaga kebersihan area produksi sesuai standar industri.",
        images: [
            "image/product/chemical-cleaning-1.jpeg",
        ]
    },
    {
        id: "motorDinamo",
        name: "Motor & Dinamo",
        description: "Motor listrik dan dinamo berbagai merek terkemuka untuk performa optimal lini produksi Anda.",
        images: [
            "image/product/motor-dinamo-1.jpeg",
        ]
    },
    {
        id: "gearbox",
        name: "Gearbox",
        description: "Gearbox berbagai merek dan spesifikasi untuk kebutuhan transmisi daya industri dengan daya tahan terjamin.",
        images: [
            "image/product/gearbox-1.jpeg",
            "image/product/gearbox-2.jpeg",
        ]
    },
    {
        id: "sparePart",
        name: "Spare Part Industri",
        description: "Bearing, pneumatic, mechanical seal, dan berbagai spare part industri lainnya — stok lengkap siap kirim.",
        images: [
            "image/product/spare-part-1.jpeg",
            "image/product/spare-part-2.jpeg",
            "image/product/spare-part-3.jpeg",
        ]
    },
    {
        id: "lubricant",
        name: "Pelumas Industri",
        description: "Oli dan grease berkualitas untuk menjaga performa dan memperpanjang umur mesin industri Anda.",
        images: [
            "image/product/lubricant-1.jpeg",
            "image/product/lubricant-2.jpeg",
        ]
    }
]
const productModal = document.getElementById('productModal')

productModal.addEventListener('show.bs.modal', (e) => {
    const modal = e.target
    const productTitleElement = modal.querySelector('.modal-title')
    const productDescElement = modal.querySelector('.product-desc')
    const productCarousel = modal.querySelector('#productCarousel .carousel-inner')
    
    const prevButton = modal.querySelector('.carousel-control-prev')
    const nextButton = modal.querySelector('.carousel-control-next')

    const productCard = e.relatedTarget
    const product = productList.find(p => p.id === productCard.dataset.productId)

    // Set Text Content
    productTitleElement.textContent = product.name
    productDescElement.textContent = product.description

    // Set Images
    productCarousel.innerHTML = ''
    product.images.forEach((img, index) => {
        const isActive = index === 0
        
        productCarousel.innerHTML += 
            `<div class="carousel-item h-100 ${isActive && "active"}">
                <img src="${img}" class="d-block w-100" alt="${product.name} ${index + 1}">
            </div>`
    })

    // Hide prev & next buttons if there is only 1 or 0 images
    if (product.images.length <= 1) {
        prevButton.classList.add('d-none')
        nextButton.classList.add('d-none')
        return
    }

    prevButton.classList.remove('d-none')
    nextButton.classList.remove('d-none')
})

productModal.addEventListener('hide.bs.modal', () => {
    document.activeElement.blur()
})