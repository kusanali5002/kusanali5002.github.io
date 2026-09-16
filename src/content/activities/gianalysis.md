---
title: "A statistical analysis of Genshin Impact wishing system"
description: "A mathematical and statistical follow-up research into Genshin Impact wishing system, calculating probabilities, soft pity, and expected costs."
date: "2025-08-03"
tags: ["Genshin Impact","Gacha","Math","Analysis"]
category: "Knowledge"
cover: "/images/gianalysis_chart.png"
author: "Ha Manh Dung (Dun)"
featured: true
---

<h2 id="content1-reason">The purpose of this research</h2>
<p>After some misunderstandings about Genshin Impact's gacha mechanics, Dun - who originally didn't
pay much attention to it - gradually became interested and eventually decided to do a small
analysis on the topic. Let's see how far his research has come!</p>
<h2 id="content2-contents">Mathematics of the Genshin character banner</h2>
<h3 id="content2-1">Chance of getting any 5-star character</h3>
<p>Java will be the language Dun uses to create a probability simulation tool. Alright, as we all
know (or maybe don't - like Dun from a few days ago), the base chance of getting a 5-star
character is 0.6%. The Genshin community has discovered something known as the 'soft pity'
system, which starts kicking in from the 74th pull up to the 89th. According to community
findings, the soft pity rate gradually increases from 0.6% at the 74th pull to a guaranteed 100%
on the 90th. We can express this rule using the following piece of code:</p>

```java
dropChanceCharacter.add(0.0);
for (int x = 0; x < 73; x++) {
    dropChanceCharacter.add(0.006);
}
for (int x = 0; x < 16; x++) {
    dropChanceCharacter.add((x + 1) * 0.06 + 0.006);
}
dropChanceCharacter.add(1.0);
```

<p>Alright, now we'll have a small list that simply stores the drop chances. Each time we iterate
over a different value of x, the drop chance will be stored in dropChanceCharacter. The drop
chance at
the
x-th roll/pull is given by <strong
style="color : rgb(255, 0, 0)">dropChanceCharacter(x)</strong>. What we're
going to calculate next is the
probability of obtaining a 5-star character (which could be either the featured banner character
or not).</p>
<p>It's easy to see that to get a 5-star character on the A-th pull/roll, we must not have gotten
any
5-star character from pull 1 to pull/roll A - 1, and then get one on pull/roll A. After picking
up some
probability knowledge from somewhere, Dun said that we need to multiply the probability of
<strong style="color: rgb(255, 0 ,0)">not
getting a 5-star</strong> on the first pull/roll with the probability of not getting one on
the
second pull/roll,
and so on, up to the probability of not getting a 5-star on pull/roll A - 1, and finally
multiply
that with the probability of <strong style="color: rgb(255, 0,0 )">getting a 5 - star</strong>
on pull/roll A.
</p>
<p>Earlier we mentioned that the drop chance at pull x is stored in dropChanceCharacter, so the
probability of not getting a 5 - star character is very easy to calculate : just subtract
dropChanceCharacter(x) from 1 and you're done. And even if we are extremely unlucky, we're
guaranteed to get a 5 - star character on the 90th pull/roll, right? So we need to return a
probability
of 0 once the current pity count exceeds 90, and just give the player a 5 - star character.
Whether the player ends up getting Qiqi or not … well, Dun has no idea</p>
<p>The logic just described above can be represented by the following piece of code:</p>

```java
public static double p(int a, int pity) {
    if (a + pity > 90) {
        return 0.0;
    } 
    else {
        double prod = 1.0;
        for (int x = pity; x < a + pity; x++) {
            prod *= (1 - dropChanceCharacter.get(x));
        }
        return dropChanceCharacter.get(a + pity) * prod;
    }
}
```

<p>According to Dun's explanation, p(a) is the probability of getting a 5-star character after a
rolls/pulls, based on the current pity.</p>
<p>The probability of obtaining a 5-star character within a pulls is simply the sum of the
probabilities of getting it from pull 1 to pull a:</p>

```java
public static double calculateCumulativeChance(int a, int pity) {
        double cumulativeChance = 0.0;
      // loop from 0 to a
        for (int x = 0; x <= a; x++) {
           // stack probabilities
            cumulativeChance += p(x, pity);
        }
        return cumulativeChance;
```

<p>We can illustrate the probability of obtaining a 5 - star character with the following chart:</p>
<figure class="content-image-full my-8">
<img src="/images/gianalysis_chart.png" alt="Cumulative Distribution Function (Pity 1 → 90) Chart" class="rounded-2xl border border-sumeru-200/60 dark:border-white/[0.08] shadow-lg">
<figcaption class="text-center text-xs text-sumeru-600/80 dark:text-nahida-mint/70 mt-2 font-mono">Figure: Cumulative Distribution Function (Pity 1 → 90) for 5★ Character Banner</figcaption>
</figure>
<p>Up to this point, we have not discovered anything new. This is a result done by other researchers
. But Dun think what people pay more attention to is the chance of getting a featured 5-star
characters</p>
<h3 id="content2-2">Chance of getting a featured 5-star character</h3>
<p>Ok first we have 2 ways of getting a featured 5-star character</p>
<ul>
<li>1. Win the 50/50</li>
<li>2. Lose the 50/50 and get another 5-star</li>
</ul>
<p>We need to add the chances of winnng the 50/50 and of losing it and then getting another 5-star
to get the full chance of getting the featured 5-star. In a pseudo-formula :</p>
<ul>
<li>Chance of getting featured 5-star = chance of getting a 5-star and winning the 50/50 +
chance of getting a standard 5-star and getting another 5-star</li>
</ul>
<p>The chance of winning the 50/50 in pull/roll a is given by p(a)/2, since it is half the chance
of getting a 5-star in pull a (50/50 say all :)))</p>
<p>To be continued ...</p>

<aside class="table-of-contents">
<h3>Table of contents</h3>
<ul>
<li><a href="#content1-reason">The purpose of this research</a></li>
<li>
<a href="#content2-contents">Mathematics of the Genshin character banner</a>
<ul>
<li><a href="#content2-1">Chance of getting any 5-star character</a></li>
<li><a href="#content2-2">Chance of getting a featured 5-star character</a></li>
</ul>
</li>
<li><a href="#content3-note">Last words</a></li>
</ul>
</aside>
