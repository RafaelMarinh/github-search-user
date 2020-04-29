class ComunComponent {
    static montarRating(rating) {
        return `<div class="card-rating">
                    <div class="star center">
                        <svg class="octicon octicon-star v-align-text-bottom" viewBox="0 0 14 16" 
                            version="1.1" width="14" height="16" aria-hidden="true"><path 
                            fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 
                            11.67 11.33 14l-.93-4.74L14 6z"></path></svg>
                    </div>
                    <div class="rating center">
                        ${rating}
                    </div
                </div>`
    }
}