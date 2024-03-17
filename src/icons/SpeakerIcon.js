const SpeakerIcon = {
    name: 'SpeakerIcon',
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
                    render('rect', {x: "4", y: "2", width: "16", height: "20", rx: "2", ry: "2"}),
                    render('circle', {cx: "12", cy: "14", r: "4"}),
                    render('line', {x1: "12", y1: "6", x2: "12", y2: "6"})
                ]
            )
        }
    }
}

export default SpeakerIcon