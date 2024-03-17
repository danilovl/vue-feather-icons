const Maximize2Icon = {
    name: 'Maximize2Icon',
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
                    render('polyline', {points: "15 3 21 3 21 9"}),
                    render('polyline', {points: "9 21 3 21 3 15"}),
                    render('line', {x1: "21", y1: "3", x2: "14", y2: "10"}),
                    render('line', {x1: "3", y1: "21", x2: "10", y2: "14"})
                ]
            )
        }
    }
}

export default Maximize2Icon
