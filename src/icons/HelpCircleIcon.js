const HelpCircleIcon = {
    name: 'HelpCircleIcon',
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
                    render('path', {d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),
                    render('line', {x1: "12", y1: "17", x2: "12", y2: "17"})
                ]
            )
        }
    }
}

export default HelpCircleIcon
