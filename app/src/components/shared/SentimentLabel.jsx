const SentimentLabel = ({ sentiment_score }) => {
    if (sentiment_score == 0) return <span className="bg-orange-200 text-orange-800 border border-orange-800 px-2 text-sm rounded-full flex items-center">Neutro</span>
    else if (sentiment_score < 0) return <span className="bg-red-100 text-red-800 border border-red-800 px-2 text-sm rounded-full flex items-center">Negativo</span>
    else if (sentiment_score > 0) return <span className="bg-green-100 text-green-800 border border-green-800 px-2 text-sm rounded-full flex items-center">Positivo</span>
}

export default SentimentLabel;