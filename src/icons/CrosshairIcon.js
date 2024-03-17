const CrosshairIcon = {
    name: 'CrosshairIcon',
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
                    render('circle', {cx: "12", cy: "12", r: "10"}),
                    render('line', {x1: "22", y1: "12", x2: "18", y2: "12"}),
                    render('line', {x1: "6", y1: "12", x2: "2", y2: "12"}),
                    render('line', {x1: "12", y1: "6", x2: "12", y2: "2"}),
                    render('line', {x1: "12", y1: "22", x2: "12", y2: "18"})
                ]
            )
        }
    }
}

export default CrosshairIcon
