const CoffeeIcon = {
    name: 'CoffeeIcon',
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
                    render('path', {d: "M18 8h1a4 4 0 0 1 0 8h-1"}),
                    render('path', {d: "M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"}),
                    render('line', {x1: "6", y1: "1", x2: "6", y2: "4"}),
                    render('line', {x1: "10", y1: "1", x2: "10", y2: "4"}),
                    render('line', {x1: "14", y1: "1", x2: "14", y2: "4"})
                ]
            )
        }
    }
}

export default CoffeeIcon;
