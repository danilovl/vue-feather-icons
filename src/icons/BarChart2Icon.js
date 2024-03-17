const BarChart2Icon = {
    name: 'BarChart2Icon',
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
                    render('line', {x1: "18", y1: "20", x2: "18", y2: "10"}),
                    render('line', {x1: "12", y1: "20", x2: "12", y2: "4"}),
                    render('line', {x1: "6", y1: "20", x2: "6", y2: "14"})
                ]
            )
        }
    }
}

export default BarChart2Icon
