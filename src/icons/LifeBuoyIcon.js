const LifeBuoyIcon = {
    name: 'LifeBuoyIcon',
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
                    render('circle', {cx: "12", cy: "12", r: "4"}),
                    render('line', {x1: "4.93", y1: "4.93", x2: "9.17", y2: "9.17"}),
                    render('line', {x1: "14.83", y1: "14.83", x2: "19.07", y2: "19.07"}),
                    render('line', {x1: "14.83", y1: "9.17", x2: "19.07", y2: "4.93"}),
                    render('line', {x1: "14.83", y1: "9.17", x2: "18.36", y2: "5.64"}),
                    render('line', {x1: "4.93", y1: "19.07", x2: "9.17", y2: "14.83"})
                ]
            )
        }
    }
}

export default LifeBuoyIcon
