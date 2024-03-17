const DownloadIcon = {
    name: 'DownloadIcon',
    props: {
        h: {
            type: Object,
            required: false
        },
        svg: {
            type: Object,
            required: false
        }
    },
    setup(props) {
        if (typeof h === 'undefined' && !props.h) {
            throw new TypeError('Vue h is not defined.')
        }

        const render = typeof h !== 'undefined' ? h : props.h

        const defaultSvg = {
            xmlns: 'http://www.w3.org/2000/svg',
            width: '24',
            height: '24',
            viewBox: '0 0 24 24',
            fill: 'none',
            stroke: 'currentColor',
            'stroke-width': '2',
            'stroke-linecap': 'round',
            'stroke-linejoin': 'round'
        }
        const svg = {...defaultSvg, ...(props?.svg ?? {})}

        return function () {
            return render('svg', svg, [
                    render('path', {d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),
                    render('polyline', {points: "7 10 12 15 17 10"}),
                    render('line', {x1: "12", y1: "15", x2: "12", y2: "3"})
                ]
            )
        }
    }
}

export default DownloadIcon
